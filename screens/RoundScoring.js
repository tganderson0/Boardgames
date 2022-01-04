import React, { useState, useEffect } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * The scoring for a particular round-based game
 * @param {*} props 
 * Elements of props:
 * props.playerScores : the array of objects that will contain the player's scores by round, and the total
 * props.setPlayerScores : the setter for playerScores
 * props.maxRounds : the number of rounds that should be played
 */
const RoundScoring = (props) => {
    const [round, setRound] = useState(1);
    const [numberValues, setNumberValues] = useState(Array(props.playerScores.length));
    // Hopefully, this should initialize each player with an object containing their name and round scores
    useEffect(() => {
        props.setPlayerScores(props.players.map(player => {
            return {"Player": player, roundScores: []}
        }))
    }, [])

    return (
        <SafeAreaView style={{ padding: 16 }}>
            <Text>Round {round}</Text>
            <ScrollView>
                {props.playerScores.map((player, playerIndex) => (
                    <View>
                        <Text>{player.Player}</Text>
                        <TextInput onChangeText={text => setNumberValues(numberValues.map((value, index) => {
                            if (index == playerIndex) {
                                return text;
                            }
                            return value;
                        }))} value={numberValues[playerIndex]} style={styles.input} placeholder="Enter Score" 
                        defaultValue={props.playerScores[playerIndex].roundScores ?? 0}/>
                    </View>
                ))}
            </ScrollView>
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

export default RoundScoring;