import React, {
  Component,
  ListView,
  View
} from 'react-native';
import { connect } from "react-redux";

import PostContainer from './post-container';
import styles from '../styles/containers';
import { fetchPosts } from "../actions";

export class PostList extends Component {
  componentDidMount() {
    this.props.dispatch(
      fetchPosts()
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.state = {
      dataSource: this.ds.cloneWithRows(nextProps.posts)
    };
  }

  constructor() {
    super(...arguments);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([])
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row) => <PostContainer {...row} />}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts
  })
)(PostList);
