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

const Register = ({navigation}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [name, setName] = React.useState('');

  const showToast = (message = "Something went Wrong") => {
    ToastAndroid.show(message,  3000);
  };

  const handleRegistration = async () => {
    try{

      if(name === '' || email === '' || password === '' || repassword === ''){
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if(password === '' != repassword === ''){
        showToast("Please match password");
        setIsError(true);
        return false;
      }

      const url = 'http://192.168.233.165:8000/api/v1/register';
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      }

      const result = await fetchServices.postData(url, data);
      console.debug(result);

      if(result?.message != null){
        showToast(result?.message); 
      }else{
        navigation.navigate("Login")
      }

    }catch(e){
      showToast(e.toString());
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              marginVertical: 20,
              color: COLORS.black,
            }}
          >
            Register
          </Text>
          
        </View>
        <View
          style={{
            marginBottom: 1,
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
              Name
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
                placeholder="Enter your Name"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
                value={name}
                onChangeText={setName}
                error={isError}
              />
            </View>
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
              Email
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
                placeholder="Enter your Email"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
                value={email}
                onChangeText={setEmail}
                error={isError}
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
                error={isError}
                
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

          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Re-Enter Password
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
                placeholder="Re-Enter your password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!passwordShown}
                style={{
                  width: "100%",
                }}
                value={repassword}
                onChangeText={setRepassword}
                error={isError}
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
            }}
          >
            
          </View>

          <Button
            title="Sign Up"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
            onPress={handleRegistration}
          />

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginVertical: 20,
              marginTop: 10
            }}
          >

            

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10
              }}
            >

            </View>

            <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.orange,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>

          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Register;
