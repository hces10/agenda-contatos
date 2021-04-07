import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 19
  },
  icons: {
    flexDirection: 'row',
    width: 110,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});