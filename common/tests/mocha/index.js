import React from "react";

const RN = React;

export const PropTypes = React.PropTypes;

RN.StyleSheet = {
  create: (style) => style
};

RN.Linking = {
  openURL: (url) => url
};

const createComponent = (type) => {
  return React.createClass({
    displayName: type,
    propTypes: {
      children: React.PropTypes.node
    },
    render() {
      return <div {...this.props}>{this.props.children}</div>;
    }
  });
};

RN.View = createComponent("View");
RN.Text = createComponent("Text");
RN.ActivityIndicatorIOS = createComponent("ActivityIndicatorIOS");
RN.Image = createComponent("Image");
RN.TouchableHighlight = createComponent("TouchableHighlight");
RN.ScrollView = createComponent("ScrollView");
RN.ListView = createComponent("ListView");
RN.ListView.DataSource = function() {};
RN.ListView.DataSource.prototype.cloneWithRows = (arr) => arr;

module.exports = RN;
