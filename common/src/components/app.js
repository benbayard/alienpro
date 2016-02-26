import React, {
  Component,
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import PostList from './post-list';
import PostContentContainer from './post-content-container';
import postContainerStyles from '../styles/containers/post-container-styles';
import containerStyles from '../styles/containers';

export default class App extends Component {
  componentDidMount() {
    this.props.dispatch(
      fetchPosts()
    );
  }

  render() {
    const {
      posts
    } = this.props;
    return (
      <View style={containerStyles.container}>
        <View style={postContainerStyles.appContainer}>
          <View style={postContainerStyles.titleContainer}>
            <PostList {...{posts}}/>
          </View>

          <ScrollView style={postContainerStyles.commentsContainer}>
            <PostContentContainer />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts
  })
)(App);
