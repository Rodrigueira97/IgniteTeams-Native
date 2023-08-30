import AsyncStorage from '@react-native-async-storage/async-storage';
import { groupsGetAll } from './groupsGetAll';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { AppError } from '../../utils/AppError';
import { Alert } from 'react-native';

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError('Este grupo já existente.');
    }

    const group = JSON.stringify([newGroup, ...storedGroups]);
    await AsyncStorage.setItem(GROUP_COLLECTION, group);
  } catch (error) {
    throw error;
  }
}
