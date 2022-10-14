import { FlatList, StyleSheet, Text, View, Button, Pressable } from 'react-native';

const AlreadyDecisionsScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Trotzdem"
                onPress={() =>
                 navigation.navigate('Neue Entscheidung')
                }
            />
            <Text>Du triffst bereits jetzt jede menge entscheidungen...</Text>
        </View>
    );
  };

export default AlreadyDecisionsScreen;