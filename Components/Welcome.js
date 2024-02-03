import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Welcome = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View style={{ flex: 1, alignContent: "space-between" }}>
        <View>
          <Image
            style={{ width: "130%", margin: -60, bottom: -150 }}
            source={require("../assets/app-logo.png")}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 30,
            position: "absolute",
            top: 450,
            width: "100%",
          }}
        >
          <View>
            <Text
            style={{
              fontSize: 30,
              color: COLORS.custom,
              textAlign: "center",
              top: 10,
            }}>
              ZENTIFY
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.white,
                textAlign: "center",
                top: 30,
              }}
            >
              Discover More, Connect Instantly.
            </Text>
          </View>

          <Button
            title="CREATE AN ACCOUNT"
            onPress={() => navigation.navigate("Register")}
            style={{
              marginTop: 70,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Already have an Account?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.orange,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Click Here!
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
