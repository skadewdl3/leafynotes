import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import DebouncedInput from './DebouncedInput';
import DebouncedTextarea from './DebouncedTextarea';

const ListItem = ({
  title,
  description,
  listIndex,
  index,
  deleteItem,
  setItem,
  item,
}) => {
  return (
    <div className="list__item">
      <div className="list__item__controls">
        <DebouncedInput
          className="list__item__title"
          defaultValue={title}
          callback={val =>
            setItem(listIndex, index, {
              ...item,
              title: val,
            })
          }
          disabled={false}
        />
        <button
          className="list__item__btn"
          onClick={() => deleteItem(listIndex, index)}
        >
          <DeleteOutlined />
        </button>
      </div>
      <DebouncedTextarea
        className="list__item__description"
        defaultValue={description}
        callback={val =>
          setItem(listIndex, index, {
            ...item,
            description: val,
          })
        }
        disabled={false}
      />
    </div>
  );
};

export default ListItem;
