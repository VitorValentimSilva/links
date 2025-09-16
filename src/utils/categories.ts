import { MaterialIcons } from "@expo/vector-icons";

type CategoriesProps = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: CategoriesProps[] = [
  { id: "1", name: "Projetos", icon: "code" },
  { id: "2", name: "Site", icon: "language" },
  { id: "3", name: "Vídeo", icon: "movie" },
  { id: "4", name: "Artigo", icon: "article" },
  { id: "5", name: "Podcast", icon: "podcasts" },
  { id: "6", name: "Outros", icon: "more-horiz" },
];
