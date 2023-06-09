import React, { useEffect } from "react";
import { Animated, Text, View } from "react-native";
import styles from "../styles";

export default function Card({ scale, zIndex, marginTop, open, first, index, input }) {
    let cardWidth = 85;
    let cardHeight = 92;

    var realWidth = new Animated.Value(85 * scale)
    var realHeight = new Animated.Value(92 * scale)
    var realMargin = new Animated.Value(marginTop)

    const inputRange = [85 * 0.81, 85]
    const outputRange = ["68.85%", "85%"]

    const animWidth = realWidth.interpolate({inputRange, outputRange})

    useEffect(() => {
        if (!first) {
            if (!open) {
                realWidth.setValue(cardWidth)
                realHeight.setValue(cardHeight)
                realMargin.setValue(15)
    
                Animated.parallel([
                    Animated.timing(
                        realWidth,
                        {
                            toValue: 85 * scale,
                            duration: 450,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        realHeight,
                        {
                            toValue: 92 * scale,
                            duration: 450,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        realMargin,
                        {
                            toValue: marginTop,
                            duration: 350,
                            useNativeDriver: false
                        }
                    )
                ]).start() 
            } else {
                Animated.parallel([
                    Animated.timing(
                        realWidth,
                        {
                            toValue: cardWidth,
                            duration: 450,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        realHeight,
                        {
                            toValue: cardHeight,
                            duration: 450,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        realMargin,
                        {
                            toValue: 15,
                            duration: 350,
                            useNativeDriver: false
                        }
                    )
                ]).start()
            }
        }
    }, [open])


    return (
        <Animated.View 
            style={[
                styles.card,
                styles.cardShadow,
                { 
                    width: animWidth,
                    height: realHeight,
                    zIndex: zIndex,
                    marginTop: realMargin,
                }]
            }
        >
            <Text>{input}</Text>
        </Animated.View>
    )
}