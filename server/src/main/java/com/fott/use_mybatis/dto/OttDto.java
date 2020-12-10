package com.fott.use_mybatis.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class OttDto {
    @Getter
    @AllArgsConstructor
    @Setter
    public static class ottRequest{
        private Long ottId;
    }

    @Getter
    @AllArgsConstructor
    @Setter
    @Builder
    public static class response{
        private Long ottId;
        private String ottName;
        private Integer maxUser;
        private Integer price;
    }

    @Getter
    @AllArgsConstructor
    @Setter
    @Builder
    public static class myPartyList{
        private Long partyId;
    }
}
