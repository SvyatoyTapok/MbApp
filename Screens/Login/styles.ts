import { StyleSheet } from 'react-native';
import {Appearance} from 'react-native';


export const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Appearance.getColorScheme() === 'dark' ? '#2c2e40' : '#fff',
    },
    input:{
        color: Appearance.getColorScheme() === 'dark' ? '#fff' : '#000',
        alignSelf: 'center',
        fontSize:24,
        marginVertical: 20,
        height: 40,
    },
    loader:{
        width: 100,
        height: 100,
    },
});
