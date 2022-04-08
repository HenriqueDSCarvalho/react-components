import { View, Button } from "react-native";

import ViewImage from './ViewImage';
import NameProduto from './NameProduto';
import ImageSony from './ImageSony';
import Descricao from './Descricao';
import Preco from './Descricao';
import ButtonCarrinho from '../Buttons/ButtonCarrinho';

export default function Xbox ({ navigation }) {
  return (
  <View>
      <ViewImage />

      <NameProduto />

      <ImageSony />

      <Descricao />

      <Preco />

      < ButtonCarrinho />

      <Button title='home' onPress={() => navigation.navigate("Home")} />
    </View>
  );
}