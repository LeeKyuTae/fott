package com.fott.use_mybatis.domain;


import com.sun.istack.internal.NotNull;
import lombok.*;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class Party {
    private Long partyId;

    @NotNull
    private Long ottId;

    @NotNull
    private Integer userCount;

    @NotNull
    private String openChatUrl;

    @NotNull
    private Integer paymentDay;

    @NotNull
    private Integer paymentMonth;
}
