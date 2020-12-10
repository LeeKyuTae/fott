package com.fott.use_mybatis.dao;

import com.fott.use_mybatis.domain.User;
import com.fott.use_mybatis.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface UserDao {

    Optional<User> findUserByIdAndPassword(String userId, String password);
    Optional<User> findUserById(String userId);
    void insertUser(UserDto.SignupRequest user);
}
