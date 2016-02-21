import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { PostContainer } from '../../src/components';

describe('<PostContainer />', () => {
  let component;
  let props;
  let sandbox;
  let pressSpy;

  beforeEach(() => {
    props = {
      url: "yay",
      title: "title"
    };

    sandbox = sinon.sandbox.create();
    pressSpy = sandbox.spy(PostContainer.prototype, "onPress");

    component = shallow(<PostContainer {...props}  />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return a view', () => {
    expect(component.is('TouchableHighlight')).to.be.true;
  });

  describe('<Text />', () => {
    let title;
    beforeEach(() => {
      title = component.find('Text').shallow();
    });

    it('should have the props as text', () => {
      expect(title.prop('children')).to.equal(props.title);
    });
  });

  it('should have the correct title', () => {
    expect(component.find('Text'))
  });

  describe(".onPress", () => {
    beforeEach(() => {
      component.prop('onPress')();
    });

    it('should call the press method on press', () => {
      expect(pressSpy).to.have.been.called;
    });

    it('should call the press method on press', () => {
      expect(pressSpy).to.have.been.calledWith(props.url);
    });
  });
});
