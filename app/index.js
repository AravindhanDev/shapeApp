import { SafeAreaView, ScrollView, StyleSheet } from "react-native"
import { Stack } from "expo-router"
import Shape from "../components/Shape"

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
    },
    shapeText: {
        fontSize: 20,
        textDecorationLine: "underline",
        marginBottom: 15,
    },
    shapeBox: {
        marginBottom: 10,
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderStyle: "solid",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#212121",
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#212121",
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: "#212121",
    },
    rectangle: {
        width: 100,
        height: 70,
        backgroundColor: "#212121",
    },
    horizontalLine: {
        height: 2,
        width: 100,
        backgroundColor: "#212121",
    },
    verticalLine: {
        width: 2,
        height: 100,
        backgroundColor: "#212121",
    },
})

export default function Home() {
    const shapes = [
        { name: "Circle", style: styles.circle },
        { name: "Triangle", style: styles.triangle },
        { name: "Rectangle", style: styles.rectangle },
        { name: "Square", style: styles.square },
        { name: "Horizontal Line", style: styles.horizontalLine },
        { name: "Vertical Line", style: styles.verticalLine },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#212121" },
                    headerTitleStyle: { color: "#f2f2f2" },
                    headerShadowVisible: false,
                    headerTitle: "Primitive Shapes",
                }}
            />
            <ScrollView>
                <ScrollView>
                    {shapes.map(({ name, style }, index) => {
                        return (
                            <Shape
                                key={index}
                                viewStyle={styles.shapeBox}
                                textStyle={styles.shapeText}
                                shape={style}
                                shapeText={name}
                            />
                        )
                    })}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}
