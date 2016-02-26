import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'stretch'
  },

  titleContainer: {
    flex: 1
  },
  commentsContainer: {
    flex: 2,
    padding: 5,
    marginTop: 64,
    backgroundColor: '#0f0',
    flexDirection: 'column',
    alignSelf: 'stretch'
  }
});
