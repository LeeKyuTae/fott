package com.fott.use_mybatis.controller;

import com.fott.use_mybatis.dto.OttDto;
import com.fott.use_mybatis.dto.UserDto;
import com.fott.use_mybatis.service.OttService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/ott")
public class OttController {
    private final OttService ottService;

    public OttController(OttService ottService){
        this.ottService = ottService;
    }

    @GetMapping("/all")
    public ResponseEntity getAllOttList(){
        try {
            List<OttDto.response> result =ottService.getOttList();
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
