import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

import { Navbar } from '@components/Navbar';
import { Highlight } from '@components/Highlight';
import { Card } from '@components/Card';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Home() {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  return (
    <Container>
      <Navbar />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        keyExtractor={(item) => item}
        data={groups}
        renderItem={({ item }) => <Card title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Cadastre sua primeira turma" />}
      />

      <Button title="Criar nova turma" onPress={() => navigate('newGroup')} />
    </Container>
  );
}
