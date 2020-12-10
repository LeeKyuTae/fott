package com.fott.use_mybatis.domain;


import com.sun.istack.internal.NotNull;
import lombok.*;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class UserParty {

    private Long id;

    @NotNull
    private String userId;
    @NotNull
    private Long partyId;
}
