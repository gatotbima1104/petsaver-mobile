import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  textHeader: {
    backgroundColor: 'tomato',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    width: 15,
    height: 15,
    position: 'absolute',
    right: 7,
    top: 8,
  },
  iconMessage: {
    padding: 14,
    backgroundColor: '#F1F5F9',
    borderRadius: 100,
    flexDirection: 'row',
  },
  statusUser: {
    flexDirection: 'row',
    paddingRight: 5,
    borderRadius: 50
  },
  postUser: {
    marginHorizontal: 28,
    marginTop: 20,
  },
});

export default globalStyle;
