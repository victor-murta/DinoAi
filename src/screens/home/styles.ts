import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        padding: 24
    },
    eventName: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6B6B6B', 
      fontSize: 16 // DPI ( dots per inch ) = tipo m por quadrado , quando maior -> melhor 
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 22,
        
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    form: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 36,
        marginBottom: 42
    },
    listEmpty: {
        color: '#fff',
        fontSize: 14,
        textAlign: "center",

    }
  });



