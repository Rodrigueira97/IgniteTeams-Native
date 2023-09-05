import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Container } from './styles';

import { Navbar } from '@components/Navbar';
import { Highlight } from '@components/Highlight';
import { Card } from '@components/Card';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loading } from '@components/Loading/Index';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await groupsGetAll();

      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigate('players', { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, []),
  );

  return (
    <Container>
      <Navbar />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          keyExtractor={(item) => item}
          data={groups}
          renderItem={({ item }) => (
            <Card onPress={() => handleOpenGroup(item)} key={item} title={item} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <ListEmpty message="Cadastre sua primeira turma" />}
        />
      )}

      <Button title="Criar nova turma" onPress={() => navigate('newGroup')} />
    </Container>
  );
}
