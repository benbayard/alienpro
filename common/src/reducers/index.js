/* @flow */
import { NEW_POSTS } from '../action-types/post-action-types';
import type { StoreType } from '../types/store-type';

const initialState: StoreType = {
  posts: [{
    url: 'http://www.google.com',
    title: 'Hey I am a post'
  }]
};

export function alienProApp(state: StoreType = initialState, action: any): StoreType {
  let children;
  let posts;
  switch (action.type) {
  case NEW_POSTS:
    children = action.posts.data.children;

    posts = children.map(post => ({
      title: post.data.title,
      url: post.data.url
    }));

    return Object.assign({}, state, {posts});
  default:
    return state;
  }
}
