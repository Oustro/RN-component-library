import React from "react";
import { View } from "react-native";
import styles from "../styles";

export default function Card({ scale, zIndex, marginTop }) {
    let cardWidth = 85 * scale;
    let cardHeight = 92 * scale;

    return(
        <View 
            style={[
                styles.card,
                styles.cardShadow,
                { 
                    width: cardWidth + '%',
                    height: cardHeight,
                    zIndex: zIndex,
                    marginTop: marginTop,
                }]
            }
        >
        </View>
    )
}