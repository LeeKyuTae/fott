package com.fott.use_mybatis.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class UserDto {

    @Getter
    @AllArgsConstructor
    @Setter
    public static class SignupRequest{
        private String userId;
        private String password;
        private String nickName;
    }

    @Getter
    @AllArgsConstructor
    @Setter
    public static class SigninRequest{
        private String userId;
        private String password;
    }

    @Getter
    @AllArgsConstructor
    @Setter
    public static class SigninResponse{
        private String userId;
        private String nickName;
    }

}
