package com.fott.use_mybatis.service;

import com.fott.use_mybatis.dao.OttDao;
import com.fott.use_mybatis.dao.PartyDao;
import com.fott.use_mybatis.dao.UserDao;
import com.fott.use_mybatis.dao.UserPartyDao;
import com.fott.use_mybatis.domain.Party;
import com.fott.use_mybatis.domain.User;
import com.fott.use_mybatis.dto.OttDto;
import com.fott.use_mybatis.dto.PartyDto;
import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PartyService {

    private final PartyDao partyDao;
    private final OttDao ottDao;
    private final UserPartyDao userPartyDao;
    private final UserDao userDao;

    public PartyService(PartyDao dao, OttDao ottDao, UserPartyDao userPartyDao, UserDao userDao){
        this.partyDao = dao;
        this.ottDao = ottDao;
        this.userPartyDao = userPartyDao;
        this.userDao = userDao;
    }

    public Long makeParty(PartyDto.makeRequest request) throws NotFoundException {
        User user = userDao.findUserById(request.getUserId()).orElseThrow(()-> new NotFoundException("no party"));
        partyDao.makeParty(request);
        PartyDto.participateRequest input = PartyDto.participateRequest.builder()
                                            .userId(request.getUserId()).partyId(request.getPartyId())
                                            .build();
        userPartyDao.participateParty(input);
       return request.getPartyId();
    }

    public List<PartyDto.response> getPartyList(){
        List<PartyDto.response> responses = partyDao.getAllPartyList();
        for(int i=0; i<responses.size(); i++){
            Integer price = responses.get(i).getPrice() * responses.get(i).getPaymentMonth();
            Integer currentPrice = price/responses.get(i).getMaxUser();
            if(currentPrice%100 > 0 ){
                currentPrice = ((Integer) currentPrice/100 +1) * 100;
            }
            responses.get(i).setPrice(currentPrice);
        }
        return responses;

    }

    public List<Party> example(){
        List<Party> responses = partyDao.getPartyExample();
        return responses;

    }

    public PartyDto.response getParty(Long partyId) throws NotFoundException {
        PartyDto.response result = partyDao.getParty(partyId).orElseThrow(()-> new NotFoundException("no party"));
        Integer price = result.getPrice() * result.getPaymentMonth();
        Integer currentPrice = price/result.getMaxUser();
        if(currentPrice%100 > 0 ){
            currentPrice = ((Integer) currentPrice/100 +1) * 100;
        }
        result.setPrice(currentPrice);
        return result;
    }

    public PartyDto.response participantParty(PartyDto.participateRequest request) throws NotFoundException {
        try{
            PartyDto.response party = getParty(request.getPartyId());
            if(party.getUserCount() < party.getMaxUser()){
                userPartyDao.participateParty(request);
                partyDao.participateParty(request);
                PartyDto.response result = getParty(request.getPartyId());
                return result;
            }else{
                return null;
            }
        }catch (Exception e) {
            throw e;
        }
    }

    public PartyDto.response fastMatchingParty(PartyDto.fastMatchingRequest request) throws NotFoundException {
        try{
            PartyDto.response party = partyDao.fastMatchParty(request).orElseThrow(()-> new NotFoundException("no party"));
            PartyDto.participateRequest input = PartyDto.participateRequest.builder()
                                                .partyId(party.getPartyId()).userId(request.getUserId()).build();
            PartyDto.response result = participantParty(input);
            return result;
        }catch (Exception e) {
            throw e;
        }
    }

    public List<PartyDto.response> getMyPartyList(String userId) throws NotFoundException {
        List<OttDto.myPartyList> data = userPartyDao.selectMyParty(userId);
        List<PartyDto.response> result = new ArrayList<>();
        for(OttDto.myPartyList input : data){
            PartyDto.response output = getParty(input.getPartyId());
            result.add(output);
        }
        return result;
    }

}
