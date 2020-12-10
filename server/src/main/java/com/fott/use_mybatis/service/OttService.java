package com.fott.use_mybatis.service;

import com.fott.use_mybatis.dao.OttDao;
import com.fott.use_mybatis.domain.OTT;
import com.fott.use_mybatis.dto.OttDto;
import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OttService {
    private final OttDao ottDao;

    public OttService(OttDao dao){
        this.ottDao = dao;
    }

    public List<OttDto.response> getOttList() {
        List<OTT> data = ottDao.getAllOtt();
        List<OttDto.response> result = new ArrayList<>();
        for(OTT output : data){
            OttDto.response input = OttDto.response.builder()
                                    .ottId(output.getOttId()).ottName(output.getOttName())
                                    .maxUser(output.getMaxUser()).price(output.getPrice())
                                    .build();
            result.add(input);
        }
        return result;
    }

    public OttDto.response getOttInfo(OttDto.ottRequest request) throws NotFoundException {
        OTT data = ottDao.getOtt(request.getOttId())
                .orElseThrow(()-> new NotFoundException("존재하지 않는 OTT"));

        OttDto.response input = OttDto.response.builder()
                .ottId(data.getOttId()).ottName(data.getOttName())
                .maxUser(data.getMaxUser()).price(data.getPrice())
                .build();

        return input;

    }
}
