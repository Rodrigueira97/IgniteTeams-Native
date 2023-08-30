import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { playersGetByGroup } from './playersGetByGroup';
import { AppError } from '@utils/AppError';

export async function PlayerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter((player) => player.name === newPlayer.name);

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já esta adicionado em um time');
    }

    const storage = JSON.stringify([newPlayer, ...storedPlayers]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
