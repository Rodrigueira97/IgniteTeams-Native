import { Container, Content, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';

import { Navbar } from '@components/Navbar';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useState } from 'react';

export function NewGroup() {
  const { goBack, navigate } = useNavigation();
  const [group, setGroup] = useState<string>();

  function handleGroup() {
    navigate('players', { group: group });
  }

  return (
    <Container>
      <Navbar showBackButton onPress={goBack} />

      <Content>
        <Icon />

        <Highlight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" onPress={handleGroup} />
      </Content>
    </Container>
  );
}
