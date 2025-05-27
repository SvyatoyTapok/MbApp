import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Image, Alert } from 'react-native';
import { styles } from './styles';
import Clipboard from '@react-native-clipboard/clipboard';
import { useMMKVStorage } from 'react-native-mmkv-storage';
import axios from '../../Utils/Axios';
import LottieView from 'lottie-react-native';
import { storage } from '../../Utils/storage';

export default function LoginScreen({ navigation }: any) {
    const [loading, setLoading] = useState(false);
    const [ApiKey, setApiKey] = useMMKVStorage('apikey', storage, '');
    const fetchCopiedText = async () => {
        setTimeout(async () => {
            const text = await Clipboard.getString();
            setApiKey(text);
        }, 0);
    };
    const handleLogin = async () => {
        setLoading(true);
        setApiKey(ApiKey);
        axios({
            method: 'POST',
            url: 'http://localhost:3000',
            data: { ApiKey },
        }).then((response) => {
            if (response.status === 200) {
                navigation.navigate('MainTabs', { name: response.data.data.name, post: response.data.data.post });
            }
            if (response.status === 401) {
                Alert.alert('Ошибка', 'Неверный API ключ');
            }
            if (response.status === 500) {
                Alert.alert('Ошибка', 'Неверный API ключ');
            }
        }).catch((e) => {
            if (e.response && e.response.status === 401) {
                Alert.alert('Ошибка', 'Неверный API ключ');
            } else {
                Alert.alert('Ошибка', 'Не удалось подключиться к серверу');
            }
        }).finally(() => { setLoading(false); });
    };

    useEffect(() => {
        if (ApiKey.length > 0) {
            handleLogin();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../../Assets/MB-logo.png')} />
            <TextInput
                placeholder="Введите API ключ"
                value={ApiKey}
                onChangeText={setApiKey}
                style={styles.input}
            />
            {loading ? (
                <LottieView
                    source={require('../../Assets/animations/loader.json')}
                    autoPlay
                    loop
                    style={styles.loader}
                />
            ) : (
                <>
                    <Button title="Вставить из буфера" onPress={fetchCopiedText} />
                    <Button title="Войти" onPress={handleLogin} />
                </>
            )}
        </View>
    );
}
