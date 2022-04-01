import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import ViewImage from "./src/Views/ViewImage.js";
import MainView from "./src/Views/MainView.js";
import EstacioView from "./src/Views/EstacioView.js";
import NameProduto from "./src/Views/NameProduto.js";
import ImageSony from "./src/Views/ImageSony.js";
import Descricao from "./src/Views/Descricao.js";
import Preco from "./src/Views/Preco.js";
import ButtonCarrinho from "./src/Buttons/ButtonCarrinho.js";

export default function App() {
  return (
    <SafeAreaView>
      <ViewImage />

      <NameProduto />

      <ImageSony />

      <Descricao />

      <Preco />

      <ButtonCarrinho />

      <MainView />
      <EstacioView />
    </SafeAreaView>
  );
}