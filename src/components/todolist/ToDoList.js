import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = props => (
  <div>
    {/* <ToDoItem toDoData={props.toDoData} /> */}
    {props.toDoData.map((value, index) => (
      <ToDoItem key={index} toDoData={value} />
    ))}
  </div>
);

export default ToDoList;
