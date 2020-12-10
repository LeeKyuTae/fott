package com.fott.use_mybatis.domain;

import com.sun.istack.internal.NotNull;
import lombok.*;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class OTT {
    private Long ottId;

    @NotNull
    private String ottName;
    @NotNull
    private Integer maxUser;
    @NotNull
    private Integer price;
}
