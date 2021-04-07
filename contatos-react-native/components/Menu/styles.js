import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000'
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    minHeight: 30,
    marginTop: 20,
  },
  textMenu: {
    color: 'white',
    fontSize: 15,
  },
  textActive: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold'
  },
  border: {
    height: 3,
    width: '100%',
    marginTop: 3,
    backgroundColor: 'green',
    borderRadius: 2,
  }
});