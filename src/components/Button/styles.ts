import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

export type ButtonPropsStyle = "PRIMARY" | "SECONDARY";

interface Props {
  type: ButtonPropsStyle;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ type, theme }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_700
      : type === "SECONDARY" && theme.COLORS.RED_DARK};
  border-radius: 6px;

  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
