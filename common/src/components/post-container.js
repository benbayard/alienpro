/* @flow */
import React, {
  Component,
  TouchableHighlight,
  Text,
  Linking
} from 'react-native';

import type { PostContainerPropType } from '../types/prop-types/post-container-prop-type';
import type { NullType } from '../types/null-type';

import titleStyles from '../styles/typography/title-styles';

export default class PostContainer extends Component<
  NullType,
  PostContainerPropType,
  NullType
> {
  onPress(url: string) {
    Linking.openURL(url);
  }

  render(): TouchableHighlight {
    const { title, url } = this.props;
    return (
      <TouchableHighlight onPress={() => this.onPress(url)}>
        <Text style={titleStyles.title}>{title}</Text>
      </TouchableHighlight>
    );
  }
}

PostContainer.displayName = 'PostContainer';
