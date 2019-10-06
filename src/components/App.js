import React from 'react';
import ToDoList from './todolist/ToDoList';
import { fetchJSON } from '../fetchJSON';
import { testData } from './testData/testData';
import '../App.css';

// import Head from './Header';
// import Week from './Menubar';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: testData,
    };
  }

  componentDidMount() {
    // fetchJSON(fetched => {
    //   this.setState({
    //     data: fetched,
    //   });
    // });
  }
  /**
   * App -> ToDoList data={this.state.data}
   * ToDoList -> props.data.map( => <TodoItem>)
   * ToDoItem => actual show off
   *
   *
   */

  render() {
    const { data } = this.state;

    if (data === null) {
      return <div>loading...</div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          WORK SLEEP EAT
          {/* <Head /> */}
        </header>
        {/* <div className="MenuBar">
          Menu Bar (it should be on the left side)
        </div> */}
        <div className="mainPage">
          <ToDoList toDoData={data} />
        </div>
      </div>
    );
  }
}
