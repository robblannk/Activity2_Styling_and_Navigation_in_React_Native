import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import Button from "../Buttons/Button";
import { Pressable } from "react-native";
import fetchServices from "./Service/fetchServices";

const Login = ({navigation}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const handleLogin = async () => {
    try {
      if (email === "") {
        setErrors({ email: true });
        return false;
      }

      if (password === "") {
        setErrors({ password: true });
        return false;
      }

      const url = "http://192.168.233.165:8000/api/v1/login";
      const data = {
        email,
        password,
      };
      const result = await fetchServices.postData(url, data);
      console.debug(result);
      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
    } finally {
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View>

          <View>
            <Button title="«" 
            onPress={() => navigation.navigate("Welcome")}
            style={{
              borderWidth: 0,
              width: 80,
              height: 50,
              marginTop:5,
              marginLeft:-25,
              
            }}
            >
            </Button>
          </View>

          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
              marginTop:10,
            }}
          >
            Login
          </Text>
        </View>
        

          <View
          style={{
            marginBottom: 1
          }}
        >
          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Username
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
                value={email}
                onChangeText={setEmail}
                error={errors?.email}
              />
            </View>
          </View>
          </View>

          

          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Password
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!passwordShown}
                style={{
                  width: "100%",
                }}
                value={password}
                onChangeText={setPassword}
                error={errors?.password}
              />
              <TouchableOpacity
                onPress={() => setPasswordShown(!passwordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {passwordShown == false ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              marginTop: 15
            }}
          >
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.green : undefined}
            />
            <Text style={{fontSize: 16}}>Remember me</Text>
          </View>

          <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    
                    <Pressable
                        onPress={() => navigation.navigate("Recovery")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.orange,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Forgot Password</Text>
                    </Pressable>
                </View>

                

          <Button onPress={handleLogin}
            title="Log In"
            filled
            style={{
              paddingHorizontal: 1,
              marginTop: 1,
              marginBottom: 1,
            }}
          />

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginVertical: 20,
              marginTop: 50
            }}
          >
           

            

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 15
              }}
            >
              
            </View>

            <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.orange,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Register Here</Text>
                    </Pressable>
                </View>

          </View>
        </View>
    </SafeAreaView>
  );
};

export default Login;
