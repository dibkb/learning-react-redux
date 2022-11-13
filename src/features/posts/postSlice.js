import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialValue = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    reactions: {
      like: 0,
      fire: 0,
    },
  },
  {
    id: "2",
    title: "Learning NodeJS",
    content: "This is the bomb",
    reactions: {
      like: 0,
      fire: 0,
    },
  },
];
export const postSlice = createSlice({
  name: "posts",
  initialState: initialValue,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
