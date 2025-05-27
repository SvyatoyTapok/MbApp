import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { storage } from '../../Utils/storage';
const SettingsScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text>Настройки</Text>
            <TouchableOpacity
                onPress={() => {
                    storage.removeItem('apikey');
                    navigation.navigate('Login');
                }}
            >
                <Text>Выйти</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;
