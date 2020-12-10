import React from "react";

export interface Ott {
    ottId : number;
    maxUser: number|null;
    price: number|null;
    ottName: string|null;
}

export const defaultData : Ott ={
    price : null,
    maxUser: null,
    ottId: -1,
    ottName: ""
    
}