import { colors } from "@/styles/colors";
import { TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="h-14 w-full bg-gray-900 rounded-lg border border-gray-800 p-3 text-gray-100 text-base"
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
}
