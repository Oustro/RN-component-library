import React from "react";
import { useState } from 'react';
import { View, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "../styles";
import Card from "./Card";

export default function Accordion() {
    const [open, setOpen] = useState(false)
    const [first, setFirst] = useState(true)

    const scales = [1, 0.95, 0.88, 0.81]
    const margins = [15, -80, -75, -78]

    var scale = 0
    var marginTop = 0

    let items = ['1', '2', '3', '4',
                 '5',]

    const onPress = () => {
        if (first) {
            setFirst(false)
        }

        if (!open) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    return(
        <TouchableWithoutFeedback onPress={onPress}>
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
    )
}