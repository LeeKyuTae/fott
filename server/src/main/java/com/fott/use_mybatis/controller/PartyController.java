package com.fott.use_mybatis.controller;

import com.fott.use_mybatis.dao.PartyDao;
import com.fott.use_mybatis.domain.Party;
import com.fott.use_mybatis.dto.PartyDto;
import com.fott.use_mybatis.service.PartyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/party")
public class PartyController {
    private final PartyService partyService;

    public PartyController(PartyService partyService){
        this.partyService = partyService;
    }

    @GetMapping("/all")
    public ResponseEntity getAllPartyList() {
        List<PartyDto.response> result = partyService.getPartyList();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/example")
    public ResponseEntity getExample() {
        List<Party> result = partyService.example();
        return ResponseEntity.ok(result);
    }

    @PostMapping("")
    public ResponseEntity makeParty(@RequestBody PartyDto.makeRequest request) {
        try {
            Long response = partyService.makeParty(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/participant")
    public ResponseEntity participantParty(@RequestBody PartyDto.participateRequest request) {
        try {
            PartyDto.response response = partyService.participantParty(request);
            if(response != null)
                return ResponseEntity.ok(response);
            else
                return ResponseEntity.badRequest().body("해당 파티에 참가할 수 없습니다.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/fast")
    public ResponseEntity fastMatchParty(@RequestBody PartyDto.fastMatchingRequest request) {
        try {
            PartyDto.response response = partyService.fastMatchingParty(request);
            if(response != null)
                return ResponseEntity.ok(response);
            else
                return ResponseEntity.badRequest().body("조건에 만족하는 파티가 없습니다.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/my-party")
    public ResponseEntity getMyParty(@RequestParam String userId) {
        try {
            List<PartyDto.response> response = partyService.getMyPartyList(userId);
            if(response != null)
                return ResponseEntity.ok(response);
            else
                return ResponseEntity.badRequest().body("조건에 만족하는 파티가 없습니다.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
