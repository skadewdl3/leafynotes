import { atom } from 'recoil';

// use seter function to save state on atom update

export const listState = atom({
  key: 'listState',
  default: [],
});
