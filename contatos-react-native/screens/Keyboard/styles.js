import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  inputContainer: {
    alignItems: 'center',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    color: 'white',
    fontSize: 25,
  },
  grid: {
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 60,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 38,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    paddingHorizontal: 15
  },
  number: {
    fontSize: 22,
    color: 'white',
    paddingRight: 2,
  },
  description: {
    fontSize: 8,
    color: 'gray'
  },
  buttons: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 70,
  },
  video: {
    width: 30,
    height: 30,
    backgroundColor: 'cyan',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 50,
    height: 50,
    paddingTop: 3,
    backgroundColor: 'green',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});