import { Container, Content, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';

import { Navbar } from '@components/Navbar';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useState } from 'react';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export function NewGroup() {
  const { goBack, navigate } = useNavigation();
  const [group, setGroup] = useState<string>();

  async function handleGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o  nome da turma');
      }

      await groupCreate(group);
      navigate('players', { group: group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Falha ao criar grupo');
        console.log(error);
      }
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
