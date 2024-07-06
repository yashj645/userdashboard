import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return res?.json();
});

export const fetchUserDetail = createAsyncThunk(
  "fetchUserDetail",
  async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res?.json();
  }
);

export const fetchUserPosts = createAsyncThunk("fetchUserPosts", async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return res?.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    userDetail: {
      isLoading: false,
      data: [],
      isError: false,
    },
    userPosts: {
      isLoading: false,
      data: [],
      isError: false,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(fetchUserDetail.pending, (state) => {
      state.userDetail.isLoading = true;
    });
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
      state.userDetail.isLoading = false;
      state.userDetail.data = action.payload;
    });
    builder.addCase(fetchUserDetail.rejected, (state) => {
      state.userDetail.isError = true;
    });
    builder.addCase(fetchUserPosts.pending, (state) => {
      state.userPosts.isLoading = true;
    });
    builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.userPosts.isLoading = false;
      state.userPosts.data = action.payload;
    });
    builder.addCase(fetchUserPosts.rejected, (state) => {
      state.userPosts.isError = true;
    });
  },
});

export default usersSlice.reducer;
