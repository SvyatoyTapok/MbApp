import React from 'react';
import { View, TextInput, Button, Alert, Image } from 'react-native';
import { styles } from './styles';
import Clipboard from '@react-native-clipboard/clipboard';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import axios from '../../Utils/Axios';

const storage = new MMKVLoader().initialize();

export default function LoginScreen({ navigation }: any) {
    const [ApiKey, setApiKey] = useMMKVStorage('apikey', storage, '');
    const fetchCopiedText = async () => {
        setTimeout(async () => {
            const text = await Clipboard.getString();
            setApiKey(text);
        }, 0);
    };
    const handleLogin = async () => {
        setApiKey(ApiKey);
        axios({
            method: 'GET',
            url: '/api/v1/',
        });
    };
    return (
        <View style={styles.container}>
            <Image source={require('../../Assets/MB-logo.png')} />
            <TextInput
                placeholder="Введите API ключ"
                value={ApiKey}
                onChangeText={setApiKey}
                style={styles.input}
            />
            <Button title="Вставить из буфера" onPress={fetchCopiedText} />

            <Button title="Войти" onPress={handleLogin} />
        </View>
    );
}
