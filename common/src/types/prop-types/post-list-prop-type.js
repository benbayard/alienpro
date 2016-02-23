/* @flow */
import type { PostType } from '../post-type';

export type PostListPropType = {
  posts: Array<PostType>,
  dispatch: Function
}
