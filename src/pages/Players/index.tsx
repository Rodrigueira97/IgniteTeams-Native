import { useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

import { Navbar } from '@components/Navbar';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayersCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';

interface RouteParams {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);
  const teams = ['Time A', 'Time B'];

  const { params } = useRoute();
  const { group } = params as RouteParams;
  const { navigate } = useNavigation();

  async function handleAddPlayer() {
    if (newPlayerName.trim().length < 1) {
      return Alert.alert('Campo vazio', 'Informe um nome válido');
    }
  }

  return (
    <Container>
      <Navbar showBackButton onPress={() => navigate('home')} />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} onChangeText={setNewPlayerName} />

        <ButtonIcon name="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={teams}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
          )}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      {team === 'Time A' && (
        <FlatList
          data={players}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
          renderItem={({ item }) => <PlayersCard name={item} onRemove={() => {}} />}
          ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        />
      )}

      {team === 'Time B' && (
        <FlatList
          data={players}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
          renderItem={({ item }) => <PlayersCard name={item} onRemove={() => {}} />}
          ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        />
      )}

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
