import styled from "styled-components/native";
import colors from "../../styles/colors";
import { StatusBar } from "react-native";
import { TextDefault } from "../../styles/stylesGlobal";

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${colors.dark};
  padding-top: ${StatusBar.currentHeight}px;
`;

export const TooBar = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
  background-color: ${colors.primary};

  justify-content:center;
  align-items:center;
`;

export const TextTooBar = styled(TextDefault)`
    flex: 1;
    font-size: 20px;
    color: ${colors.light};
    font-weight: bold;
    text-align:center;

`;