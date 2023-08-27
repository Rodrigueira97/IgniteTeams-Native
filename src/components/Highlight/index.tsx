import { Container, SubTitle, Title } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

export function Highlight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
