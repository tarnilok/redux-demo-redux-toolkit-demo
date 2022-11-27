import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
  //? we don't need a catch block as the error is handled
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //! action type => 'user/fetchUsers/pending'
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    //! action type =>  'user/fetchUsers/fulfilled'
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    //! action type =>  'user/fetchUsers/rejected'
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
