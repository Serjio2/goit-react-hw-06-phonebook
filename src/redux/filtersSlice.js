import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
