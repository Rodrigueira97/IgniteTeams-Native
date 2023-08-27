import { Container, FilterStyleProps, Title } from "./styles";

interface Props extends FilterStyleProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

export function Filter({ isActive, title, ...rest }: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
}
