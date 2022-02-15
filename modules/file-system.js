import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

// save methods

export function storeData(storageKey, object) {
	storage.set(storageKey, JSON.stringify(object));
}

// read methods

export function getData(storageKey) {
	const rawData = storage.getString(storageKey);
	return JSON.parse(rawData);
}
