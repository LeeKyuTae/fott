package com.fott.use_mybatis.dao;

import com.fott.use_mybatis.domain.Party;
import com.fott.use_mybatis.dto.PartyDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface PartyDao {

    Long makeParty(PartyDto.makeRequest request);

    Optional<PartyDto.response> getParty(Long partyId);
    List<PartyDto.response> getAllPartyList();
    List<Party> getPartyExample();

    void participateParty(PartyDto.participateRequest request);

    Optional<PartyDto.response> fastMatchParty(PartyDto.fastMatchingRequest request);
}
