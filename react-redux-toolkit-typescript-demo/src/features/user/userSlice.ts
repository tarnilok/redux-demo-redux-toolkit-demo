import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

type initialStateType = {
  loading: boolean;
  users: User[];
  error: string;
};

const initialState: initialStateType = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
  //? we don't need a catch block as the error is handled
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //! action type => 'user/fetchUsers/pending'
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    //! action type =>  'user/fetchUsers/fulfilled'
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    //! action type =>  'user/fetchUsers/rejected'
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message ?? "Something went wrong";
    });
  },
});

export default userSlice.reducer;
