import React, { useState, useEffect } from 'react';
import DebouncedInput from './DebouncedInput';

const List = ({
  name,
  setName,
  items,
  addItem,
  deleteItem,
  deleteList,
  index,
}) => {
  const [editable, setEditable] = useState(false);
  const changeName = newName => setName(index, newName);

  useEffect(() => {
    document.querySelector(`.list__name--${index}`).value = name;
  }, [name]);

  return (
    <div className="list">
      <div className="list__controls">
        <DebouncedInput
          className={`list__name ${
            editable ? '' : 'list__name--disabled'
          } list__name--${index}`}
          disabled={!editable}
          defaultValue={name}
          callback={changeName}
        />
        <div className="list__controls--right">
          <button
            className="list__control"
            onClick={() => setEditable(!editable)}
          >
            <i className={`fa fa-icon fa-${editable ? 'check' : 'pencil'}`}></i>
          </button>
          <button className="list__control">
            <i className="fa fa-icon fa-plus"></i>
          </button>
          <button className="list__control" onClick={() => deleteList(index)}>
            <i className="fa fa-icon fa-trash-o"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
