import SecureLogin from "@/assets/svg/secure-login";
import Input from "@/components/common/input";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "tailwindcss/colors";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1">
        {/* Secure Login Svg Section */}
        <View className="aspect-[8/5.5] w-[65%] mx-auto p-6">
          <SecureLogin />
        </View>

        {/* Title Section */}
        <Text className="text-6xl leading-[72px] text-white font-semibold text-center mb-6">
          Hello Again !
        </Text>

        {/* Input Section */}
        <Input placeholder="Username" />
        <Input iconName="lock" placeholder="Password" />
        <Text className="px-6 text-right text-lg text-violet-600">
          Forgot Password ?
        </Text>

        {/* Button Section */}
        <TouchableOpacity className="mx-6 mt-8 py-5 bg-purple-400 rounded-xl">
          <Text className="text-center text-2xl text-white font-bold">
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Button Text Section */}
        <View className="flex-row items-center gap-4 mt-12 px-6">
          <View className="h-[1px] flex-1 bg-white/85"></View>
          <Text className="text-white/85 text-lg">or Continue with</Text>
          <View className="h-[1px] flex-1 bg-white/85"></View>
        </View>

        {/* Social Media Icon Section */}
        <View className="flex flex-row items-center justify-center gap-6 mt-6">
          <View className="rounded-xl bg-white/10 p-3">
            <AntDesign name="google" size={32} color="white" />
          </View>
          <View className="rounded-xl bg-white/10 p-3">
            <AntDesign name="apple" size={32} color="white" />
          </View>
          <View className="rounded-xl bg-white/10 p-3">
            <Entypo name="facebook" size={32} color="white" />
          </View>
        </View>

        {/* Register Link Section */}
        <Text className="text-2xl text-white/50 mt-6 px-6">
          Don't have an account ?
        </Text>
        <View className="flex flex-row items-center mt-6">
          <Text className="text-2xl text-violet-600 pl-6">Register Now</Text>
          <Entypo name="chevron-right" size={28} color={colors.violet[600]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
