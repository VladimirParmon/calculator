import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface HistoryState {
  value: string[];
}

const initialState: HistoryState = {
  value: []
};

export const HistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    clear: (state) => {
      state.value = [];
    }
  }
});

export const { add, clear } = HistorySlice.actions;

export const selectHistory = (state: RootState) => state.history.value;

export default HistorySlice.reducer;
