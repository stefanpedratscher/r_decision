import { FlatList, StyleSheet, Text, View, Button, Pressable } from 'react-native';

const json_data = require('./../data/data.json');

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Neue Entscheidung"
                onPress={() =>
                navigation.navigate('Du triffst bereits Entscheidungen')
                }
            />
            <Text style={styles.pastDecisions}>Vergangene Entscheidungen</Text>
            <FlatList
                data={json_data}
                renderItem={({item}) => 
                    <Pressable
                        style={item.decision ? styles.itemContainerTrue: styles.itemContainerFalse}
                        onPress={() => navigation.navigate('Vergangene Entscheidung', { item: item })}>
                        <Text style={styles.item}>{item.title}</Text>
                    </Pressable>
                }
            />
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    pastDecisions: {
        fontSize: 20
    },
    itemContainerTrue: {
        backgroundColor: "red"
    },
    itemContainerFalse: {
        backgroundColor: "green"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});

export default HomeScreen;