import React from "react";

export interface Party {
    price : number|null;
    paymentDay: number|null;
    paymentMonth: number|null;
    userCount: number|null;
    maxUser: number|null;
    partyId: number|null;
    ottName: string|null;
    openChatUrl: string|null;
}

export const defaultData : Party ={
    price : null,
    paymentDay : null,
    paymentMonth: null,
    userCount: null,
    maxUser: null,
    partyId: null,
    ottName: "",
    openChatUrl: ""
}