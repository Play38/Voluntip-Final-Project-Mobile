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
        width:300,
        alignSelf: "center",
        marginBottom: 25,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: '#5374d6',
        backgroundColor:'white'
    },
    buttonText: {
        fontSize: 25,
        color: '#5374d6',
        alignSelf: 'center'
    },
    button: {
        color:'#5374d6',
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'red',
        marginTop: 10,
        width:50,
        justifyContent: 'center',
    },
    errorMassage: {
        fontSize: 25,
        marginTop: 10,
        alignSelf: 'center'
    }
})
