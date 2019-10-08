import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      completed: this.props.data.completed,
      count: 0,
      isfresh: true,
      // data,
      // completed, // 와 ! 신기해 !
    };
    this.handleCheck = this.handleCheck.bind(this); // Don't forget to bind function!
    this.handleDelete = this.handleDelete.bind(this);
    // this.refresh = this.refresh.bind(this);
  }

  handleCheck() {
    const { completed, data } = this.state;
    const { sendCompleted } = this.props;
    this.setState({
      completed: !completed,
    });
    sendCompleted(data.id);
    // Apps에서 메소드를 내려줘서 data.id를 실행시킨다.
  }

  handleDelete() {
    const { data } = this.state;
    this.props.deleteToDo(data.id);
    // this.refresh();
  }

  // refresh() {
  //   this.setState((prev) => ({ isfresh: !prev.isfresh }));
  // }

  render() {
    const { title } = this.props.data;
    const { completed } = this.state;

    const changeStyle = {
      textDecoration: completed === true ? 'line-through' : 'none',
    };

    return (
      <div className="ToDoItem">
        <button onClick={this.handleDelete}>delete</button>
        <span style={changeStyle} onClick={this.handleCheck}>
          {title}
        </span>
      </div>
    );
  }
}

export default ToDoItem;
// const ToDoItem = (props) => (
//   <div>
//     <form>
//       <lable>
//         <input type="checkbox" value={props.toDoData.createdAt} />
//         {props.toDoData.title}
//       </lable>
//     </form>
//   </div>
// );

// export default ToDoItem;
