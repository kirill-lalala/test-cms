export const localStorageGetItem = key => JSON.parse(localStorage.getItem(key));

export const localStorageSetItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));