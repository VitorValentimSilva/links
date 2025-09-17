import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-14 w-full bg-green-300 justify-center rounded-lg items-center"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="text-green-900 text-base font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
