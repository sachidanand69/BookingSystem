
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";
import { jwtDecode } from "jwt-decode";

export const fetchSlots = createAsyncThunk(
  "slots/fetchSlots",
  async ()=>{
    const res = await api.get("/slots");
    console.log(res);
    return res.data.data;
  }
);

export const bookSlot = createAsyncThunk(
  "slots/bookSlot",
  async (slotId)=>{
    const userId = localStorage.getItem("id");
    

    const res = await api.post("/bookings", null, {
      params: {
        slotId: slotId,
        userId: userId
      }
    });

    return res.data;
  }
);

const slotSlice = createSlice({
  name:"slots",
  initialState:{slots:[]},
  extraReducers:(builder)=>{
    builder.addCase(fetchSlots.fulfilled,(state,action)=>{
      state.slots = action.payload;
    });
  }
});

export const deleteSlotById = createAsyncThunk(
  "slots/deleteSlot",
  async (slotId) => {
    await api.delete(`/slots/${slotId}`); // or /slots/${slotId} if backend API is /slots
    return slotId;
  }
);

export default slotSlice.reducer;
