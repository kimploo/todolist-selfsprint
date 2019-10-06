import React from 'react';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <div>
        <form>
          <lable>
            <input type="checkbox" value={this.props.toDoData.createdAt} />
            {this.props.toDoData.title}
          </lable>
        </form>
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
