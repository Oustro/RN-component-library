import React from "react";
import { useState } from 'react';
import { View, TouchableWithoutFeedback } from "react-native";
import styles from "../styles";
import Card from "./Card";

export default function Accordion() {
    const [open, setOpen] = useState(false)

    const scales = [1, 0.95, 0.88, 0.81]
    const zIndexs = [3, 2, 1, 0]
    const margins = [15, -80, -75, -80]

    let items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6']

    const onPress = () => {
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
                    let useIndex = index;

                    if (index > 2) {
                        useIndex = 3
                    }

                    return <Card 
                        scale={scales[useIndex]}
                        zIndex={zIndexs[useIndex]}
                        marginTop={margins[useIndex]}
                        open={open}
                    >
                    </Card>
                })}
            </View>
        </TouchableWithoutFeedback>    
    )
}