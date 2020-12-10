package com.fott.use_mybatis.domain;


import com.sun.istack.internal.NotNull;
import lombok.*;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class User {

    private Long id;

    @NotNull
    private String userId;
    @NotNull
    private String password;
    @NotNull
    private String nickName;
}
