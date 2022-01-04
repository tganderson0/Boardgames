import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, ScrollView, Button, StyleSheet } from "react-native";

/*
Each time AddPlayers is used, it should be given the following as props:

players : the "useState" array of the current players
setPlayers : the corresponding setter for players
stage: the "useState" integer representing the current stage of game setup
setStage: the corresponding setter for the stage

*/

const AddPlayers = (props) => {
    const [name, setName] = useState('');
    return (
        <SafeAreaView style={{ padding: 16 }}>
            <Text>Add Players to the game!</Text>
                <TextInput onChangeText={setName} value={name} style={styles.input} placeholder="Enter Player Name"/>
                <Button onPress={() => {
                    if (name !== ''){
                        props.setPlayers([...props.players, name]);
                        setName('');
                    }
                }}
                title="Add player"
                style={styles.button}
                />
                
            <ScrollView>
                {props.players.map(player => (
                    <Text style={{ fontSize: 16 }}>{player}</Text>
                ))}
            </ScrollView>
            <Button onPress={() => {
                if (props.players.length > 0)
                props.setStage(props.stage + 1)
                }} title= "Continue" style={styles.button}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    button: {
        margin: 8,
    }
})

export default AddPlayers;