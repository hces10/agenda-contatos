import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerModal: {
    width: '100%',
    height: '100%',
    paddingVertical: 10,
    backgroundColor: 'black',
  },
  scroll: {
    marginTop: 20,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#141414',
    borderRadius: 25,
  },
  footer: {
    height: 70,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 19,
    paddingLeft: 20,
  },
  image: {
    width: '100%',
    height: 140,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  input: {
    backgroundColor: '#141414',
    width: '100%',
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    paddingLeft: 30,
    fontSize: 18,
    color: 'white',
  },
  options: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000'
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 18
  }
});