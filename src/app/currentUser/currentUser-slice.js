import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeCurrentUser: () => initialState,
  },
});

export default currentUserSlice.reducer;
