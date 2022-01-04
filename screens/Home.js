import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native";

const Home = () => {
    return (
        <SafeAreaView>
            <Text>Hello there!</Text>
            <Button title="Press me to do nothing!"/>
        </SafeAreaView>
    );
}

export default Home;