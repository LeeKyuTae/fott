package com.fott.use_mybatis.service;

import com.fott.use_mybatis.dao.UserDao;
import com.fott.use_mybatis.domain.User;
import com.fott.use_mybatis.dto.UserDto;
import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserDao userDao;

    public UserService(UserDao userDao){
        this.userDao = userDao;
    }


    public void addUser(UserDto.SignupRequest user){
          userDao.insertUser(user);
    }

    public UserDto.SigninResponse getUser(UserDto.SigninRequest request) throws NotFoundException {
        System.out.println("user: " + request.getUserId());
        System.out.println("password: " + request.getPassword());
        User user = userDao.findUserByIdAndPassword(request.getUserId(), request.getPassword()).orElseThrow(()-> new NotFoundException("존재하지 않는 유저입니다."));
        System.out.println(user);
        UserDto.SigninResponse result = new UserDto.SigninResponse(user.getUserId(), user.getNickName());
        return result;
    }

}
