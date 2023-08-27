import { BackButton, Container, IconBack, Logo } from './styles';
import LogoImg from '@assets/logo.png';

interface Props {
  showBackButton?: boolean;
}

export function Navbar({ showBackButton }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <IconBack />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Container>
  );
}
