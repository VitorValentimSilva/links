import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "@links:storage";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function getLinks(): Promise<LinkStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
    const links: LinkStorage[] = storage ? JSON.parse(storage) : [];
    return links;
  } catch (error) {
    throw error;
  }
}

async function saveLink(newLink: LinkStorage) {
  try {
    const links = await getLinks();
    const updatedLinks = [...links, newLink];
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(updatedLinks));
  } catch (error) {
    throw error;
  }
}

async function removeLink(linkId: string) {
  try {
    const links = await getLinks();
    const filteredLinks = links.filter((link) => link.id !== linkId);
    await AsyncStorage.setItem(
      LINKS_STORAGE_KEY,
      JSON.stringify(filteredLinks)
    );
  } catch (error) {
    throw error;
  }
}

export const linkStorage = {
  getLinks,
  saveLink,
  removeLink,
};
