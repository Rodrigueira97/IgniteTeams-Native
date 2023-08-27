import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  type?: ButtonIconTypeProps;
  name: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({ name, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container>
      <Icon name={name} type={type} />
    </Container>
  );
}
