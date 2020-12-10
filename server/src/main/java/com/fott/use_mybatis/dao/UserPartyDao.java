package com.fott.use_mybatis.dao;


import com.fott.use_mybatis.dto.OttDto;
import com.fott.use_mybatis.dto.PartyDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserPartyDao {

    void participateParty(PartyDto.participateRequest request);
    List<OttDto.myPartyList> selectMyParty(String userId);
}
