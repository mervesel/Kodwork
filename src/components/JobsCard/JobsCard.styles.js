import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 20,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,

    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    comText: {
        fontSize: 16,
        marginTop: 5,
    },
    locationText: {
        backgroundColor: 'tomato',
        alignSelf: 'flex-start',
        fontSize: 18,
        color: 'white',
    },
    text_container: {
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'tomato',
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    
    levelText: {
        color: 'tomato',
        textAlign: 'right',
        fontSize: 18

    }

    
})