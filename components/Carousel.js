import React, { useState, useRef } from "react";
import { View, Text, Animated, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import styles from "../styles";
import { AntDesign } from '@expo/vector-icons';
import Card from "./Card";

export default function Carousel({ month }) {
    const [open, setOpen] = useState(false)
    const [first, setFirst] = useState(true)

    const angle = useRef(new Animated.Value(0)).current

    const inputRange = [0, 1]
    const outputRange = ["0deg", "90deg"]

    const animAngle = angle.interpolate({inputRange, outputRange})
    const angleStyle = { transform: [{ rotate: animAngle }]}

    const expand = () => {
        if (first) {
            setFirst(false)
        }
        
        if (!open) {
            setOpen(true)

            Animated.timing(
                angle,
                {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: false
                }
            ).start()
        } else {
            setOpen(false)

            Animated.timing(
                angle,
                {
                    toValue: 0,
                    duration: 250,
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
            
            <View style={styles.carousel}>
                <Card
                    width={35}
                    height={92}
                    scale={1}
                    zIndex={0}
                    hiddenMargin={-100}
                    marginTop={5}
                    open={open}
                    first={first}
                />
            </View>
        </View>
    )
}