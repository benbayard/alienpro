/* @flow */
import React, {
  Component,
  ListView,
  View
} from 'react-native';

import PostContainer from './post-container';
import styles from '../styles/containers';
import { PostListPropType } from '../types/prop-types/post-list-prop-type';

export default class PostList extends Component<
  PostListPropType,
  PostListPropType,
  PostListPropType
> {
  componentWillReceiveProps(nextProps: PostListPropType) {
    this.setState({
      posts: this.ds.cloneWithRows(nextProps.posts)
    });
  }

  constructor() {
    super(...arguments);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      posts: this.ds.cloneWithRows(this.props.posts)
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.posts}
          renderRow={(row) => <PostContainer {...row} />}
        />
      </View>
    );
  }
}

PostList.defaultProps = {
  posts: []
};
