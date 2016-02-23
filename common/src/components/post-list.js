/* @flow */
import React, {
  Component,
  ListView,
  View
} from 'react-native';
import { connect } from 'react-redux';

import PostContainer from './post-container';
import styles from '../styles/containers';
import { fetchPosts } from '../actions';
import { PostListPropType } from '../types/prop-types/post-list-prop-type';

export class PostList extends Component<
  PostListPropType,
  PostListPropType,
  PostListPropType
> {
  componentDidMount() {
    this.props.dispatch(
      fetchPosts()
    );
  }

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

export default connect(
  state => ({
    posts: state.posts
  })
)(PostList);
