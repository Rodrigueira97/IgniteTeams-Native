import { Container, Content, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';

import { Navbar } from '@components/Navbar';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useState } from 'react';
import { groupCreate } from '@storage/group/groupCreate';

export function NewGroup() {
  const { goBack, navigate } = useNavigation();
  const [group, setGroup] = useState<string>();

  async function handleGroup() {
    try {
      await groupCreate(group);

      navigate('players', { group: group });
    } catch (error) {
      console.log(error);
    }
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
