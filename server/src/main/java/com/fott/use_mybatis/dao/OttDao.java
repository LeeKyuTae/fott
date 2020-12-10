package com.fott.use_mybatis.dao;

import com.fott.use_mybatis.domain.OTT;
import com.fott.use_mybatis.domain.Party;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface OttDao {

    Optional<OTT> getOtt(Long ottId);
    List<OTT> getAllOtt();
}
