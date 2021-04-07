import { StyleSheet } from 'react-native';
import { FlingGestureHandler } from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    minHeight: 50,
    alignItems: 'center',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  personLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  character: {
    fontSize: 19,
    color: 'white',
    paddingBottom:3,
  },
  name: {
    fontSize: 18,
    color: 'white',
    paddingLeft: 18,
  },
  collapse: {
    justifyContent: 'center',
    alignItems:'center',
  },
  phone: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  icons: {
    width: '100%',
    paddingLeft: 50,
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    alignSelf: 'flex-end',
    width: '75%',
    height: 1,
    marginEnd: '6%',
    backgroundColor: 'gray',
    opacity: 0.2,
  },
});