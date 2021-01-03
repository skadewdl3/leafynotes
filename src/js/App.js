import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { listState } from './state';
import { chunk } from 'lodash';
import { PlusOutlined } from '@ant-design/icons';

import List from './List';

const App = () => {
  const chunkSize = 4;
  const [lists, setLists] = useRecoilState(listState);

  useEffect(() => {
    let persistedData = localStorage.getItem('leafyNotes');
    if (persistedData) setLists(JSON.parse(persistedData));
  }, []);

  const setName = (index, name) => {
    let newLists = lists.map((cur, i) =>
      i === index ? { ...cur, name } : cur
    );
    setLists(newLists);
  };

  const addItem = (index, item) => {
    let newLists = lists.map((cur, i) =>
      i === index
        ? {
            ...cur,
            items: [...cur.items, item],
          }
        : cur
    );
    console.log(newLists);
    setLists(newLists);
  };

  const setItem = (listIndex, index, newItem) => {
    let newLists = lists.map((cur, i) =>
      i === listIndex
        ? {
            ...cur,
            items: cur.items.map((item, j) => (index === j ? newItem : item)),
          }
        : cur
    );
    setLists(newLists);
  };

  const deleteItem = (index, deleteIndex) => {
    let newLists = lists.map((cur, i) =>
      i === index
        ? {
            ...cur,
            items: cur.items.filter(
              (item, itemIndex) => itemIndex !== deleteIndex
            ),
          }
        : cur
    );
    setLists(newLists);
  };

  const createNewList = () => {
    let newList = {
      name: 'Todo List',
      items: [],
    };
    setLists([...lists, newList]);
  };

  const deleteList = index => {
    let newList = lists.filter((cur, i) => i !== index);
    setLists(newList);
  };

  return (
    <>
      <div className="landing">
        <div className="landing__title">
          <div className="landing__title--main">
            <img
              src="images/leaf.svg"
              alt="Leafy Notes Icon"
              className="landing__title__icon"
            />
            <span>Leafy Notes</span>
          </div>
          <div className="landing__title--sub">
            <span>Simple. Elegant. Effective.</span>
          </div>
        </div>
        <div className="lists">
          <div className="lists__buttons">
            <button className="lists__btn" onClick={() => createNewList()}>
              <PlusOutlined />
              <span>Create List</span>
            </button>
          </div>
          {chunk(lists, chunkSize).map((cur, index) => {
            return (
              <div
                className="lists__grid"
                style={{ gridTemplateColumns: `${'1fr '.repeat(chunkSize)}` }}
                key={index}
              >
                {cur.map((list, i) => (
                  <List
                    key={i}
                    index={i}
                    name={list.name}
                    items={list.items}
                    setName={setName}
                    addItem={addItem}
                    deleteItem={deleteItem}
                    deleteList={deleteList}
                    setItem={setItem}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
