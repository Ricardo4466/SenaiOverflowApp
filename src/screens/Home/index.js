import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Container, TooBar, TextTooBar } from "./styles";
import colors from "../../styles/colors";
import CardQuestion from "../../components/CardQuestion";



function Home() {
    
    StatusBar.setBackgroundColor(colors.primary);

  return (
  <Container>
      <TooBar>
        <TextTooBar>Senai Overflow</TextTooBar>
      </TooBar>
      <CardQuestion/>
  </Container>
  );
}
export default Home;
