import React from "react";
import { View } from "react-native";
import styles from "../styles";
import Card from "./Card";

export default function Accordion() {
    return(
        <View style={{ 
            flex: 0,
            width: '100%',
            height: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
        }}>
            <Card 
                scale={1}
                zIndex={3}
                marginTop={0}
            >
            </Card>
            <Card 
                scale={0.95}
                zIndex={2}
                marginTop={-80}
            >
            </Card>
            <Card 
                scale={0.88}
                zIndex={1}
                marginTop={-75}
            >
            </Card>
        </View>
    )
}