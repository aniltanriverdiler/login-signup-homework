import Feather from "@expo/vector-icons/Feather";
import React, { useRef } from "react";
import { TextInput, TouchableWithoutFeedback, View } from "react-native";

const Input = (props: TextInput['props'] & {iconName?: string}) => {
  const inputRef = useRef<TextInput | null>(null);

  return (
    <View className="w-full px-6 mb-6">
      <TouchableWithoutFeedback
        onPress={() => {
          inputRef?.current?.focus();
        }}
      >
        <View className="flex flex-row items-center bg-white/10 rounded-xl">
          <View className="absolute w-[32px] aspect-square items-center justify-center ml-1.5">
            <Feather name={(props.iconName as any) ?? "user"} size={24} color="white" />
          </View>
          <TextInput
            placeholder="Email"
            {...props}
            ref={inputRef}
            placeholderTextColor={"white"}          
            className="text-white pl-12 my-1.5"
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Input;
