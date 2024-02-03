import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require("../assets/app-logo.png")} />
        
        <Button
          title="Log Out"
          onPress={() => navigation.navigate("Login")}
          style={{
            width: 350,
            marginTop: 70,
            marginLeft: 33,
          }}
        />
      </View>
    </View>
  );
};

export default Home;
