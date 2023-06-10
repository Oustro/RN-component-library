import React, { useRef } from "react";
import { useState } from 'react';
import { View, TouchableWithoutFeedback, Text, Pressable, Animated } from "react-native";
import styles from "../styles";
import Card from "./Card";

export default function Accordion() {
    const [open, setOpen] = useState(false)
    const [first, setFirst] = useState(true)

    const scales = [1, 0.95, 0.88, 0.81]
    const margins = [7, -80, -75, -78]

    var scale = 0
    var marginTop = 0

    const animOpacity = useRef(new Animated.Value(0)).current

    let items = ['1', '2', '3', '4',
                 '5',]

    const expand = () => {
        if (first) {
            setFirst(false)
        }

        if (!open) {
            setOpen(true)

            Animated.timing(
                animOpacity,
                {
                    toValue: 1,
                    duration: 350,
                    useNativeDriver: false
                }
            ).start()
        }
    }

    const collapse = () => {
        if (open) {
            setOpen(false)

            Animated.timing(
                animOpacity,
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
            <View style={styles.accordionHeader}>
                <Text style={styles.accordionText}>Today</Text>
 
                <Animated.View style={{ opacity: animOpacity }}>
                    <Pressable 
                        style={styles.button}
                        onPress={collapse}
                    >
                        <Text style={{ color: 'white' }}>Show less</Text>
                    </Pressable>
                </Animated.View>
            </View>

            <TouchableWithoutFeedback onPress={expand}>
                <View style={styles.accordion}>
                    {items.map((item, index)=>{
                        if (index < 4) {
                            scale = scales[index]
                            marginTop = margins[index]
                        } else if (index > 3) {
                            scale = 0.95 - (0.05 * (index - 1))
                            marginTop = -92 * (0.95 - (0.05 * (index - 1)))
                        }

                        return <Card 
                            scale={scale}
                            zIndex={1000 - index}
                            marginTop={marginTop}
                            open={open}
                            first={first}
                            input={item}
                        >
                        </Card>
                    })}
                </View>
            </TouchableWithoutFeedback> 
        </View>
    )
}