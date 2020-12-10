package com.fott.use_mybatis.controller;

import com.fott.use_mybatis.dto.UserDto;
import com.fott.use_mybatis.service.UserService;
import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/signin")
    public ResponseEntity signIn(@RequestBody UserDto.SigninRequest request) throws NotFoundException {
        try{
            UserDto.SigninResponse response = userService.getUser(request);
            return ResponseEntity.ok(response);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/signup")
    public ResponseEntity signUp(@RequestBody UserDto.SignupRequest request){
        try {
            userService.addUser(request);
            return ResponseEntity.ok("add user");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
