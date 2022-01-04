import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native";
import AddPlayers from "./AddPlayers";
import RoundScoring from "./RoundScoring";

const FiveCrowns = () => {
    const [players, setPlayers] = useState([]);
    const [playerScores, setPlayerScores] = useState([]);
    const [stage, setStage] = useState(0);
    const maxRounds = 3;
    return(
        <SafeAreaView>
            <Button title="Reset" onPress={() => {
                setPlayers([]);
                setStage(0);
            }}/>
            {stage == 0 ? <AddPlayers players={players} setPlayers={setPlayers} stage={stage} setStage={setStage}/> : <></>}
            
            {stage == 1 ? <RoundScoring maxRounds={maxRounds} players={players} playerScores={playerScores} setPlayerScores={setPlayerScores} /> : <></>}
        </SafeAreaView>
    );
}

export default FiveCrowns;