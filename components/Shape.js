import { View, Text } from "react-native"

export default function Shape({ viewStyle, textStyle, shape, shapeText }) {
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{shapeText}</Text>
            <View style={shape} />
        </View>
    )
}
