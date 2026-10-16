import { ThreadType } from "@/types/types";
import { createRandomThread } from "@/utils/get-dommy-data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  threads: ThreadType[];
}

const initialState: InitialState = {
  threads: [],
};

const threadSlice = createSlice({
  initialState,
  name: "ThreadSlice",
  reducers: {
    generateThreads: {
      // الـ reducer نقي: يضع الـ payload كما هو فقط
      reducer: (state, action: PayloadAction<ThreadType[]>) => {
        state.threads = action.payload;
      },
      // العشوائية تحدث هنا، قبل وصول الـ action للـ reducer
      prepare: () => ({
        payload: Array.from({ length: 10 }, createRandomThread),
      }),
    },
  },
});

export default threadSlice.reducer;
export const { generateThreads } = threadSlice.actions;
