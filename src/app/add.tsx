import { Button } from "@/components/Button";
import { Categories } from "@/components/Categories";
import { Input } from "@/components/Input";
import { linkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handleAddLink() {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione uma categoria.");
      }

      if (!name.trim()) {
        return Alert.alert("Nome", "Informe o nome do link.");
      }

      if (!url.trim()) {
        return Alert.alert("URL", "Informe a URL do link.");
      }

      await linkStorage.saveLink({
        id: String(new Date().getTime()),
        name: name,
        url: url,
        category,
      });

      Alert.alert("Sucesso", "Link salvo com sucesso!", [
        {
          text: "Ok",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o link.");
    }
  }

  return (
    <View className="flex-1 pt-16">
      <View className="flex-row justify-between px-6 mb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
      </View>

      <Text className="text-2xl font-semibold text-gray-200">Novo</Text>

      <Text className="text-gray-400 text-sm px-6">
        Selecione uma categoria
      </Text>

      <Categories select={category} onChange={setCategory} />

      <View className="p-6 gap-4">
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />

        <Input
          placeholder="URL"
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Button title="Adicionar" onPress={handleAddLink} />
      </View>
    </View>
  );
}
