import { FlatList, StyleSheet, Text, View, Button, Pressable } from 'react-native';

const ProContraScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text>Pro Contra {route.params.question}</Text>
        </View>
    );
  };

export default ProContraScreen;