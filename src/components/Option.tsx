import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type OptionProps = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export function Option({
  name,
  icon,
  variant = "primary",
  ...rest
}: OptionProps) {
  return (
    <TouchableOpacity className="flex-row items-center gap-1" {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === "primary" ? colors.green[300] : colors.gray[400]}
        className={`${variant === "primary" ? "text-green-300" : "text-green-400"}`}
      />
      <Text
        className={`${variant === "primary" ? "text-base font-semibold text-green-300" : "text-base text-gray-400"}`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
