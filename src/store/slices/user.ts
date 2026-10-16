import { User } from "@/types/types";
import { createRandomUser } from "@/utils/get-dommy-data";
import { createSlice } from "@reduxjs/toolkit";
// import { InitialState } from "expo-router/react-navigation";

interface InitialState {
  user: User | null;
}
const initialState: InitialState = {
  user: null,
};
const userSlice = createSlice({
  initialState,
  name: "UserSlice",
  reducers: {
    generateUser: (state) => {
      state.user = createRandomUser();
    },
  },
});

export default userSlice.reducer;
export const { generateUser } = userSlice.actions;
