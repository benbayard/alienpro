/* @flow */
import { NEW_POSTS } from '../action-types/post-actions';
import type { StoreType } from '../types/store-type';

const initialState: StoreType = {
  posts: [{
    url: 'http://www.google.com',
    title: 'Hey I am a post'
  }]
};

export function alienProApp(state: StoreType = initialState, action: any): StoreType {
  switch (action.type) {
  case NEW_POSTS:
    return Object.assign({}, state, {posts: action.posts});
  default:
    return state;
  }
}
