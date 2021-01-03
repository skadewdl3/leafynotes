import React, { useState, useEffect } from 'react';
import {
  DeleteOutlined,
  PlusCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import DebouncedInput from './DebouncedInput';
import ListItem from './ListItem';

const List = ({
  name,
  setName,
  items,
  addItem,
  setItem,
  deleteItem,
  deleteList,
  index,
}) => {
  const changeName = newName => setName(index, newName);

  useEffect(() => {
    document.querySelector(`.list__name--${index}`).value = name;
  }, [name]);

  return (
    <div className="list">
      <div className="list__controls">
        <DebouncedInput
          className={`list__name list__name--${index}`}
          disabled={false}
          defaultValue={name}
          callback={changeName}
        />
        <div className="list__controls--right">
          <button
            className="list__control"
            onClick={() => {
              let item = {
                title: 'Todo Item',
                description:
                  'Write a short description to help you remember this todo better.',
              };
              addItem(index, item);
            }}
          >
            <PlusCircleOutlined />
          </button>
          <button className="list__control" onClick={() => deleteList(index)}>
            <CloseOutlined />
          </button>
        </div>
      </div>
      <div className="list__items">
        {items.map((item, i) => (
          <ListItem
            key={i}
            item={item}
            title={item.title}
            description={item.description}
            listIndex={index}
            index={i}
            setItem={setItem}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
