import { NEW_POSTS } from "../action-types/post-actions";

const initialState = {
  posts: [{
    url: "http://www.google.com",
    title: "Hey I am a post"
  }]
};

export function alienProApp(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case NEW_POSTS:
      const newState = Object.assign({}, state, {posts: action.posts});
      return newState;
    default:
      return state;
  }
};
