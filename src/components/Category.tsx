import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";

type CategoryProps = PressableProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  isSelected?: boolean;
};

export function Category({ name, icon, isSelected, ...rest }: CategoryProps) {
  const color = isSelected ? colors.green[300] : colors.gray[400];

  return (
    <Pressable className="flex-row items-center gap-1" {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />

      <Text className="text-base font-semibold" style={{ color }}>
        {name}
      </Text>
    </Pressable>
  );
}
