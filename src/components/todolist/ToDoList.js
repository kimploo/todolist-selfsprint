/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => (
  <div>
    {/* <ToDoItem toDoData={props.toDoData} /> */}
    {props.data.map((value) => (
      <ToDoItem
        key={value.id}
        data={value}
        sendCompleted={props.sendCompleted}
      />
    ))}
  </div>
);

export default ToDoList;
