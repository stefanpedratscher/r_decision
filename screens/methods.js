import { FlatList, StyleSheet, Text, View, Button, Pressable } from 'react-native';

const MethodsScreen = ({ navigation, route }) => {
    if("params" in route.params) {
        route.params = route.params.params
    }
    console.log(route.params)

    data = <Text>Method not found</Text>

    if(route.params.proContra.selected && !route.params.proContra.done) {
        route.params.proContra.done = true
        data = <Text>Pro Contra {route.params.question}</Text>
        
    } else if (route.params.method10.selected && !route.params.method10.done) {
        route.params.method10.done = true
        data = <Text>10-10-10 Method {route.params.question}</Text>
    }

    button = <Button title="Weiter" onPress={() => navigation.navigate('Methode', route) } />

    if((!route.params.proContra.selected || route.params.proContra.done) &&
        (!route.params.method10.selected || route.params.method10.done)) {
            button = <Button title="Ergebnis" onPress={() => navigation.navigate('Ergebnis', route) } />
    }

    return (
        <View>
            {data}
            {button}
        </View>
    );
  };

export default MethodsScreen;