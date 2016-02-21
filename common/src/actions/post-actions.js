import {
  NEW_POSTS
} from "../action-types/post-actions";

const REDDIT_API = "https://api.reddit.com";

export function newPosts(posts) {
  return {
    type: NEW_POSTS,
    posts
  };
};

export function fetchPosts() {
  return (dispatch) => {
    return fetch(REDDIT_API)
      .then(response => response.json())
      .then(response => {
        const { children } = response.data;

        const posts = children.map(post => ({
          title: post.data.title,
          url: post.data.url
        }));

        return dispatch(newPosts(posts));
      });
  };
};
