import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { PostList } from '../../src/components/post-list';

describe('<PostContainer />', () => {
  let component;
  let props;
  let sandbox;
  let pressSpy;

  beforeEach(() => {
    props = {
      posts: [
        'yay',
        'boo'
      ]
    };

    component = shallow(<PostList {...props} />);
  });

  it('should return a view', () => {
    expect(component.is('View')).to.be.true;
  });

  it('should use the props to make a dataSource', () => {
    expect(component.state('posts')).to.equal(props.posts);
  });
});
