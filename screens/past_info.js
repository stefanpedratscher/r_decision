import { FlatList, StyleSheet, Text, View, Button, Pressable } from 'react-native';

const PastInfoScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text>Info frühere entschedidung von {route.params.item.title}</Text>
        </View>
    );
  };

export default PastInfoScreen;