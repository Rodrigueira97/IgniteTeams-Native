import { Navbar } from '@components/Navbar';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Navbar showBackButton onPress={goBack} />

      <Content>
        <Icon />

        <Highlight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" />
      </Content>
    </Container>
  );
}
