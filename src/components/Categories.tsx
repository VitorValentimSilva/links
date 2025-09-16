import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "./Category";

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Category name={item.name} icon={item.icon} />}
      horizontal
      className="h-14 max-h-14"
      contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
