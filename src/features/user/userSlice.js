import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { getUserDetails as getUserDetailsFromBackend } from '../../common/backend';

export const getUserDetails = createAsyncThunk('user/getUserDetails', async (ThunkAPI) => {
  const response = await getUserDetailsFromBackend();
  if (response.status === 200) {
    return response.json()
  } else {
    return ThunkAPI.rejectWithValue(response.status)
  }
})


const userSlice = createSlice({
  name: 'user',
  initialState: {status: 'idle'},
  reducers: {
    userDisconnected: (state, action) => {
      return {
        status: 'idle'
      };
    },
  },
  extraReducers: {
    [getUserDetails.fulfilled]: (state, action) => {
      state.hexColor = action.payload.hexColor;
      state.unicodeChar = action.payload.unicodeChar;
      state.status = 'idle';
    },
    [getUserDetails.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getUserDetails.rejected]: (state, action) => {
      state.status = action.payload ? action.payload : -1;
    }
  }
});

export default userSlice.reducer;
export const { userDisconnected } = userSlice.actions;