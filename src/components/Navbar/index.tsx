import { BackButton, Container, IconBack, Logo } from './styles';
import LogoImg from '@assets/logo.png';

interface Props {
  showBackButton?: boolean;
  onPress?: () => void;
}

export function Navbar({ showBackButton, onPress }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={onPress}>
          <IconBack />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Container>
  );
}
