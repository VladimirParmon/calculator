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
    addToHistory: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    clearHistory: (state) => {
      state.value = [];
    }
  }
});

export const { addToHistory, clearHistory } = HistorySlice.actions;

export const selectHistory = (state: RootState) => state.history.value;

export default HistorySlice.reducer;
