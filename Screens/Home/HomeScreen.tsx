import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface HomeScreenProps {
    name: string;
    post: string;
}

const HomeScreen = ({ name, post }: HomeScreenProps) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>Hello {name}, ты {post}</Text>
        </View>
    );
};
export default HomeScreen;
