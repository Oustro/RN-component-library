import React from "react";
import { Animated, View } from "react-native";
import styles from "../styles";

export default function Card({ scale, zIndex, marginTop }) {
    let cardWidth = 85 * scale;
    let cardHeight = 92 * scale;

    return(
        <Animated.View 
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
        </Animated.View>
    )
}