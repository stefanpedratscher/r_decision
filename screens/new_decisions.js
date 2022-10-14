import { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CheckBox from 'expo-checkbox';

const NewDecisionScreen = ({ navigation }) => {
    const [question, onChangeQuestion] = useState("Useless Text");
    const [isSelectedProContra, setSelectionProContra] = useState(true);
    const [isSelected10, setSelection10] = useState(true);
    return (
        <View>
            <Text>Verfasse deine Entscheidungsfrage (sollte mit ja oder nein bearbeite werden können):</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeQuestion}
                placeholder="useless placeholder"
                keyboardType="text"
            />
            <Text>Methoden auswählen:</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelectedProContra}
                    onValueChange={setSelectionProContra}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Pro und Contra</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected10}
                    onValueChange={setSelection10}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>10-10-10</Text>
            </View>
            <Button
                title="Starten"
                onPress={() =>
                 navigation.navigate('Methode', {
                    question: question, 
                    proContra: {
                        selected: isSelectedProContra,
                        done: false
                    },
                    method10: {
                        selected: isSelected10,
                        done: false
                    }
                })
                }
            />
        </View>
    );
  };

  const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });

export default NewDecisionScreen;