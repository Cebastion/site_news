import { configureStore } from "@reduxjs/toolkit";
import { NewsSliceApi } from "./features/slice/NewsSlice";

export const store = configureStore({
    reducer: {
        [NewsSliceApi.reducerPath]: NewsSliceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(NewsSliceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
