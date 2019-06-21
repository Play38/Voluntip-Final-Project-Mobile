import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 25,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#5374d6',
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    color: '#5374d6',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#70c9f5',
    marginTop: 10,
    width: '95%',
    justifyContent: 'center'
  },
  buttonSign: {
    position: 'absolute',
    bottom: 0,
    color: '#5374d6',
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    marginTop: 10,
    width: '100%',
    justifyContent: 'center'
  },
  buttonTextSign: {
    fontSize: 20,
    color: 'gray',
    alignSelf: 'center'
  },
  errorMassage: {
    fontSize: 25,
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center'
  }
})
