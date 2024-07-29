import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from './Slices/bitcoins';

const store = configureStore({
  reducer: {
    bitcoin: articlesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
