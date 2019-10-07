/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => (
  <div>
    {props.data.map((value) => (
      <ToDoItem
        key={value.id}
        data={value}
        sendCompleted={props.sendCompleted}
        deleteToDo={props.deleteToDo}
      />
    ))}
  </div>
);

export default ToDoList;
