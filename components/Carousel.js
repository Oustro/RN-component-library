import React, { useState, useRef } from "react";
import { View, Text, Animated, TouchableWithoutFeedback } from "react-native";
import styles from "../styles";
import { AntDesign } from '@expo/vector-icons';

export default function Carousel({ month }) {
    const [open, setOpen] = useState(false)

    const angle = useRef(new Animated.Value(0)).current

    const inputRange = [0, 1]
    const outputRange = ["0deg", "90deg"]

    const animAngle = angle.interpolate({inputRange, outputRange})
    const angleStyle = { transform: [{ rotate: animAngle }]}

    const expand = () => {
        if (!open) {
            setOpen(true)

            Animated.timing(
                angle,
                {
                    toValue: 1,
                    duration: 350,
                    useNativeDriver: false
                }
            ).start()
        } else {
            setOpen(false)

            Animated.timing(
                angle,
                {
                    toValue: 0,
                    duration: 350,
                    useNativeDriver: false
                }
            ).start()
        }
    }

    return(
        <View>
            <TouchableWithoutFeedback onPress={expand}>
                <View style={styles.carouselHeader}>
                    <Text style={[styles.mainText, { paddingRight: 5 }]}>{month}</Text>

                    <Animated.View style={angleStyle}>
                        <AntDesign 
                            name="right"
                            size={15}
                            color="#777777"
                        />
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
            
        </View>
    )
}