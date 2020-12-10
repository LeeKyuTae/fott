package com.fott.use_mybatis.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class PartyDto {

    @Getter
    @AllArgsConstructor
    @Setter
    public static class makeRequest{
        private String userId;
        private Long ottId;
        private String openChatUrl;
        private Integer paymentDay;
        private Integer paymentMonth;
        private Long partyId;
    }

    @Getter
    @AllArgsConstructor
    @Setter
    @Builder
    public static class participateRequest{
        private Long partyId;
        private String userId;
    }

    @Getter
    @AllArgsConstructor
    @Setter
    public static class fastMatchingRequest{
        private Long ottId;
        private String userId;
        private Integer paymentMonth;
    }

    @Getter
    @AllArgsConstructor
    @Setter
    @Builder
    public static class response{
        private Integer price;
        private Integer paymentDay;
        private Integer paymentMonth;
        private Integer userCount;
        private Integer maxUser;
        private Long partyId;
        private String ottName;
        private String openChatUrl;
    }

    @Getter
    @AllArgsConstructor
    @Setter
    @Builder
    public static class ParticipantResponse{
        private List<String> users;
        private Integer price;
        private Integer paymentDay;
        private Integer paymentMonth;
        private Integer userCount;
        private Integer maxUser;
        private Long partyId;
        private String ottName;
        private String openChatUrl;
    }
}
