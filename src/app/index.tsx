import { Categories } from "@/components/Categories";
import { Link } from "@/components/Link";
import { Option } from "@/components/Option";
import { LinkStorage, linkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import "@/styles/global.css";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const [linkSelected, setLinkSelected] = useState<LinkStorage>(
    {} as LinkStorage
  );
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [category, setCategory] = useState(categories[0].name);

  async function getLinks() {
    try {
      const links = await linkStorage.getLinks();
      const filteredLinks = links.filter((link) => link.category === category);
      setLinks(filteredLinks);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os links.");
    }
  }

  function handleDetailLink(selectedLink: LinkStorage) {
    setShowModal(true);
    setLinkSelected(selectedLink);
  }

  async function linkRemove() {
    try {
      await linkStorage.removeLink(linkSelected.id);
      setShowModal(false);
      getLinks();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir o link.");
    }
  }

  function handleDeleteLink() {
    Alert.alert("Atenção", "Deseja realmente excluir esse link?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        style: "destructive",
        onPress: linkRemove,
      },
    ]);
  }

  async function handleOpenLink() {
    try {
      await Linking.openURL(linkSelected.url);
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o link.");
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

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
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            OnDetails={() => handleDetailLink(item)}
          />
        )}
        className="border-t-gray-600 border-t"
        contentContainerStyle={{ padding: 24, paddingBottom: 100, gap: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View className="flex-1 justify-end">
          <View className="bg-gray-900 border-t border-t-gray-800 p-6 pb-11">
            <View className="w-full flex-row items-center mb-8">
              <Text className="flex-1 text-base font-medium text-gray-400">
                {linkSelected.category}
              </Text>

              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text className="text-base font-semibold text-gray-200">
              {linkSelected.name}
            </Text>

            <Text className="text-sm text-gray-400">{linkSelected.url}</Text>

            <View className="flex-row mt-8 w-full justify-between border-t border-t-gray-600 py-4">
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={handleDeleteLink}
              />
              <Option name="Abrir" icon="language" onPress={handleOpenLink} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
