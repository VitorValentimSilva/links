import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "./Category";

type CategoriesProps = {
  select: string;
  onChange: (categoryId: string) => void;
};

export function Categories({ select, onChange }: CategoriesProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === select}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      className="h-14 max-h-14"
      contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
