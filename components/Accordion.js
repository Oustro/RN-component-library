import React from "react";
import { useState } from 'react';
import { View, TouchableWithoutFeedback } from "react-native";
import styles from "../styles";
import Card from "./Card";

export default function Accordion() {
    const [open, setOpen] = useState(false)

    const scales = [1, 0.95, 0.88, 0.88]
    const zIndexs = [3, 2, 1, 0]
    const margins = [0, -80, -75, -85]

    const [useScales, setUseScales] = useState(scales)
    const [useZs, setUseZs] = useState(zIndexs)
    const [useMargins, setUseMargins] = useState(margins)

    let items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6']

    const onPress = () => {
        if (!open) {
            setOpen(true)

            setUseScales([1, 1, 1, 1])
            setUseZs([0, 0, 0, 0])
            setUseMargins([0, 30, 30, 30])
        } else {
            setOpen(false)

            setUseScales(scales)
            setUseZs(zIndexs)
            setUseMargins(margins)
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
                        scale={useScales[useIndex]}
                        zIndex={useZs[useIndex]}
                        marginTop={useMargins[useIndex]}
                    >
                    </Card>
                })}
            </View>
        </TouchableWithoutFeedback>
    )
}