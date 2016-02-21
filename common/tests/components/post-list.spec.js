import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { PostList } from '../../src/components';

describe('<PostContainer />', () => {
  let component;
  let props;
  let sandbox;
  let pressSpy;

  beforeEach(() => {
    props = {
      url: 'yay',
      title: 'title'
    };

    sandbox = sinon.sandbox.create({
      useFakeServer: true
    });

    component = shallow(<PostList {...props}  />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return a view', () => {
    expect(component.is('View')).to.be.true;
  });

  it('should make a request to the reddit api server', () => {
    expect(sandbox.server.requests[0]).to.exist;
  });
});
