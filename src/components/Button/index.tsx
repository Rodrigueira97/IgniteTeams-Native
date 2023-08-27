import { TouchableOpacityProps } from "react-native";
import { ButtonPropsStyle, Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonPropsStyle;
}

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
