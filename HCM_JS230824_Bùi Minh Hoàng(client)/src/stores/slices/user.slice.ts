import { createSlice } from "@reduxjs/toolkit";

interface Address{
    id: number;
    title: string;
    userId: number;
    provinceId: number;
    provinceName: string;
    districtId: number;
    districtName: string;
    wardId: number;
    wardName: string;
    des: string;
}

export interface User{
    id: number;
    userName: string;
    password: string;
    email: string;
    emailConfirm: boolean;
    createAt: string;
    updateAt: string;
    avatar: string;
    address:Address[]
}

interface UserState {
    data: User | null;
    loadding:boolean
    }

let initialState:UserState ={
    data: null,
    loadding:false
}

const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{}
})




