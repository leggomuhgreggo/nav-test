import React, { useCallback, useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Link } from "@react-navigation/native";

// import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

// ────────────────────────────────────────────────────────────────────────────────

export const ScreenOne = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
    </View>
  );
};
export const ScreenTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
    </View>
  );
};
export const ScreenThree = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two: Screen Three</Text>
      {/* <Link to={screen: "TabTwoModal"}>Cools</Link> */}
      <Pressable
        style={{ backgroundColor: "blue", padding: 10 }}
        onPress={() => {
          navigation.navigate("TabTwoModal");
        }}
      >
        <Text style={[styles.title, { color: "white" }]}>Open Modal</Text>
      </Pressable>
    </View>
  );
};

export const ScreenFour = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two: Modal</Text>
    </View>
  );
};

export const ModalStackOne = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ModalStack: One</Text>
      <Pressable
        style={{ backgroundColor: "blue", padding: 10 }}
        onPress={() => {
          navigation.navigate("ModalStackTwo");
        }}
      >
        <Text style={[styles.title, { color: "white" }]}>Go To</Text>
      </Pressable>
    </View>
  );
};
export const ModalStackTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ModalStack: Two</Text>
    </View>
  );
};

// ────────────────────────────────────────────────────────────────────────────────

const TabOneStack = createNativeStackNavigator();

export const TabOneStackScreen = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="TabOneScreen" component={ScreenOne} />
    </TabOneStack.Navigator>
  );
};

// ────────────────────────────────────────────────────────────────────────────────

const ModalStack = createNativeStackNavigator();

export const ModalStackScreen = () => {
  return (
    <ModalStack.Navigator initialRouteName="ModalStackOne">
      <TabTwoStack.Screen name="ModalStackOne" component={ModalStackOne} />
      <TabTwoStack.Screen name="ModalStackTwo" component={ModalStackTwo} />
    </ModalStack.Navigator>
  );
};

// ────────────────────────────────────────────────────────────────────────────────

const TabTwoStack = createNativeStackNavigator();

export const TabTwoStackScreen = () => {
  return (
    <TabTwoStack.Navigator initialRouteName="TabTwoScreen">
      <TabTwoStack.Screen name="TabTwoScreen" component={ScreenThree} />
      <TabTwoStack.Screen
        name="TabTwoModal"
        component={ModalStackScreen}
        options={{ title: "Modal", presentation: "modal" }}
      />
    </TabTwoStack.Navigator>
  );
};
