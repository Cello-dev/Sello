import * as SecureStore from 'expo-secure-store';

// Stores the account credentials in the user's storage locally and is encrypted
async function saveCredentials(key, value) {
  await SecureStore.setItemAsync(key, value);
}

// Removes the account credentials from the user's storage locally
async function removeCredentials(key) {
  await SecureStore.deleteItemAsync(key);
}

async function getCredentials(key) {
  return SecureStore.getItemAsync(key);
}

export { saveCredentials, removeCredentials, getCredentials }