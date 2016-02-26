import {
  NEW_POSTS
} from '../action-types/post-action-types';

const REDDIT_API = 'https://api.reddit.com';

export function newPosts(posts) {
  return {
    type: NEW_POSTS,
    posts
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return fetch(REDDIT_API)
      .then(response => response.json())
      .then(response => {
        return dispatch(newPosts(response));
      });
  };
}
