import { Categories } from "@/components/Categories";
import { Link } from "@/components/Link";
import { Option } from "@/components/Option";
import { colors } from "@/styles/colors";
import "@/styles/global.css";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [category, setCategory] = useState(categories[0].name);

  return (
    <View className="flex-1 pt-16">
      <View className="px-6 mb-8 w-full flex-row items-center justify-between">
        <Image source={require("@/assets/logo.png")} className="w-9 h-8" />

        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories select={category} onChange={setCategory} />

      <FlatList
        data={["1", "2", "3", "4", "5"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Rocketseat"
            url="https://www.rocketseat.com.br/"
            OnDetails={() => console.log("Clicou!")}
          />
        )}
        className="border-t-gray-600 border-t"
        contentContainerStyle={{ padding: 24, paddingBottom: 100, gap: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View className="flex-1 justify-end">
          <View className="bg-gray-900 border-t border-t-gray-800 p-6 pb-11">
            <View className="w-full flex-row items-center mb-8">
              <Text className="flex-1 text-base font-medium text-gray-400">
                Curso
              </Text>

              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text className="text-base font-semibold text-gray-200">
              Rocketseat
            </Text>

            <Text className="text-sm text-gray-400">URL</Text>

            <View className="flex-row mt-8 w-full justify-between border-t border-t-gray-600 py-4">
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
