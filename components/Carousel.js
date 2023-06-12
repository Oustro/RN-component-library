import React, { useState, useRef } from "react";
import { View, Text, Animated, TouchableWithoutFeedback, Dimensions, Pressable } from "react-native";
import styles from "../styles";
import { AntDesign } from '@expo/vector-icons';
import Card from "./Card";

export default function Carousel({ month, items }) {
    const [open, setOpen] = useState(false)
    const [first, setFirst] = useState(true)

    const angle = useRef(new Animated.Value(0)).current

    const inputRange = [0, 1]
    const outputRange = ["0deg", "90deg"]

    const animAngle = angle.interpolate({inputRange, outputRange})
    const angleStyle = { transform: [{ rotate: animAngle }]}

    const arrowMargin = useRef(new Animated.Value(-140.5)).current

    const windowDimensions = Dimensions.get('window');
    const cardWidth = (windowDimensions.width * 0.85 * 0.50)
    const startTranslate = ((windowDimensions.width * 0.85 * 0.40) / 2) + 15
    const animTranslate = useRef(new Animated.Value(startTranslate)).current
    var position = 0

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


            Animated.timing(
                arrowMargin,
                {
                    toValue: 40.5,
                    duration: 400,
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

            Animated.timing(
                arrowMargin,
                {
                    toValue: -140.5,
                    duration: 400,
                    useNativeDriver: false
                }
            ).start()
        }
    }

    const left = () => {
        if (position != 0) {
            --position

            Animated.timing(
                animTranslate,
                {
                    toValue: -(startTranslate) - (cardWidth * (position - 1)) - (15 * position),
                    duration: 250,
                    useNativeDriver: false
                }
            ).start()
        }

        console.log('LEFT')
        console.log('position: ' + position)
    }

    const right = () => {
        if (position != items.length - 1) {
            Animated.timing(
                animTranslate,
                {
                    toValue: -(startTranslate) - (cardWidth * position) - (15 * (position + 1)),
                    duration: 250,
                    useNativeDriver: false
                }
            ).start()

            ++position
        }

        console.log('RIGHT')
        console.log('position: ' + position)
    }

    return(
        <View style={{ alignItems: "center" }}>
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
                <Animated.View style={[styles.carouselButtons, { marginTop: arrowMargin }]}>
                    <Pressable onPress={left} hitSlop={30}>
                        <AntDesign 
                            name="leftcircle" 
                            size={25} 
                            color='#777777'
                            style={{ paddingLeft: 10 }}
                        />
                    </Pressable>

                    <Pressable onPress={right} hitSlop={30}>
                        <AntDesign 
                            name="rightcircle" 
                            size={25} 
                            color='#777777'
                            style={{ paddingRight: 10 }}
                        />
                    </Pressable>
                </Animated.View>
                

                <Animated.View style={[
                    styles.carouselContent,
                    { 
                        transform: [{ translateX: animTranslate }]
                    }
                ]}>
                    {items.map((item, index) => {
                        return (
                            <Card
                                width={50}
                                height={92}
                                scale={1}
                                zIndex={0}
                                hiddenMargin={-100}
                                marginTop={2}
                                open={open}
                                first={first}
                            />
                        )
                    })}
                </Animated.View>
            </View>
        </View>
    )
}