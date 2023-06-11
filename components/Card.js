import React, { useEffect } from "react";
import { Animated, Text } from "react-native";
import styles from "../styles";

export default function Card({ width, height, scale, zIndex, hiddenMargin, marginTop, open, first, input }) {
    const realWidth = new Animated.Value(width * scale)
    const realHeight = new Animated.Value(height * scale)
    const realMargin = new Animated.Value(hiddenMargin)

    const inputRange = [0, 100]
    const outputRange = ["0%", "100%"]

    const animWidth = realWidth.interpolate({inputRange, outputRange})

    useEffect(() => {
        if (!first) {
            if (!open) {
                realWidth.setValue(width)
                realHeight.setValue(height)
                realMargin.setValue(marginTop)
    
                Animated.parallel([
                    Animated.timing(
                        realWidth,
                        {
                            toValue: width * scale,
                            duration: 450,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        realHeight,
                        {
                            toValue: height * scale,
                            duration: 450,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        realMargin,
                        {
                            toValue: hiddenMargin,
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
                            toValue: width,
                            duration: 450,
                            useNativeDriver: false
                        }
                    ),
                    Animated.timing(
                        realHeight,
                        {
                            toValue: height,
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