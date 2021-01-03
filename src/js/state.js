import { atom, selector } from 'recoil';

export const lists = atom({
  key: 'lists',
  default: [],
});

export const listState = selector({
  key: 'listState',
  get: ({ get }) => get(lists),
  set: ({ set }, val) => {
    set(lists, val);
    console.log(val);
    localStorage.setItem('leafyNotes', JSON.stringify(val));
  },
});
