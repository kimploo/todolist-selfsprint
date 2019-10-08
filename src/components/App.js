/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import React from 'react';
import ToDoList from './todolist/ToDoList';
import Head from './Header/Head';
import { fetchJSON } from '../fetchJSON'; // pallned fetch real data from server.
import { testData } from './testData/testData'; // but test on testData.
import MenuBar from './MenuBar/MenuBar';
import '../App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      originalData: testData,
      isMainPage: true,
      isfresh: true,
    };
    this.addToDo = this.addToDo.bind(this);
    this.filterOut = this.filterOut.bind(this);
    this.mapFilteredData = this.mapFilteredData.bind(this);
    this.mapCheckedData = this.mapCheckedData.bind(this);
    this.mapUncheckedData = this.mapUncheckedData.bind(this);
    this.searchData = this.searchData.bind(this);
    this.goBackHome = this.goBackHome.bind(this);
    this.sendCompleted = this.sendCompleted.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    // this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: testData,
    });
    // fetchJSON(fetched => {
    //   this.setState({
    //     data: fetched,
    //   });
    // });
  }

  addToDo = toDoObj => {
    const newData = [toDoObj, ...this.state.originalData];
    this.setState({
      data: newData,
      originalData: newData,
    });
    // console.log('addToDo works', this.state.data);
  }; // add new one ToDoObj

  filterOut(array) {
    const checkGroup = [];
    for (let i = 0; i < array.length; i++) {
      if (!checkGroup.includes(array[i].group)) {
        checkGroup.push(array[i].group);
      }
    }
    return checkGroup;
  } // get Group list

  mapFilteredData(groupName) {
    const { data, originalData } = this.state;
    const filteredData = data.filter(value => value.group === groupName);
    this.setState({
      data: filteredData,
      isMainPage: false,
    });
  } // Main Page를 기본 값으로 !

  mapCheckedData() {
    const { data, originalData } = this.state;
    const filteredData = originalData.filter(value => value.completed === true);
    this.setState({
      data: filteredData,
      isMainPage: false,
    });
  } // Main Page를 기본 값으로 !

  mapUncheckedData() {
    const { data, originalData } = this.state;
    const filteredData = originalData.filter(
      value => value.completed === false,
    );
    this.setState({
      data: filteredData,
      isMainPage: false,
    });
  } // Main Page를 기본 값으로 !

  searchData(str) {
    // const str = event.target.value;
    const { data, originalData } = this.state;
    const matched = [];
    for (let i = 0; i < originalData.length; i++) {
      const check = originalData[i].title.split(' ');
      for (let j = 0; j < check.length; j++) {
        if (check[j].includes(str)) {
          matched.push(originalData[i]);
        }
      }
    }
    this.setState({
      data: matched,
      isMainPage: false,
    });
  } // Main Page를 기본 값으로 !

  goBackHome() {
    const { isMainPage, data, originalData } = this.state;
    if (!isMainPage) {
      this.setState(state => ({
        data: originalData,
        isMainPage: true,
      }));
    }
  } // Data를 기본 데이터로 바꾸고, 메인 페이지 값을 트루로

  // 원래는 App에서 submit처리를 하고 싶었는데..
  sendCompleted(id) {
    const { originalData } = this.state;
    for (let i = 0; i < originalData.length; i++) {
      if (originalData[i].id === id) {
        const prevArray = originalData.slice(0, i);
        const nextArray = originalData.slice(i + 1);
        const newData = {
          id: originalData[i].id,
          title: originalData[i].title,
          completed: !originalData[i].completed, // 바꿔준다.
          createdAt: originalData[i].createdAt,
          updatedAt: originalData[i].updatedAt,
          group: originalData[i].group,
        };

        this.setState({
          originalData: [...prevArray, newData, ...nextArray],
        }); // 찾는 것과 아이디가 같은 것의 completed만 바꾸고 싶다.
      }
    }
    // console.log('id', id, 'it worked?');
  }

  deleteToDo(id) {
    const { originalData } = this.state;
    for (let i = 0; i < originalData.length; i++) {
      if (originalData[i].id === id) {
        const prevArray = originalData.slice(0, i);
        const nextArray = originalData.slice(i + 1);
        this.setState(prevState => ({
          originalData: [...prevArray, ...nextArray],
          data: prevState.originalData,
          isMainPage: true,
        })); // slice 후 이어붙이기.
      }
    }
    console.log('id', id, 'it worked?');
  }

  refresh() {
    this.setState(prev => ({ isfresh: !prev.isfresh }));
  }

  render() {
    const { data, originalData } = this.state;

    if (data === null) {
      return <div>nothing was fetched, check your code.</div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <Head data={data} addToDo={this.addToDo} />
          {/* <button onClick={this.refresh}>refresh</button> */}
          <button onClick={this.goBackHome}>Return Home</button>
          <button onClick={this.mapCheckedData}>Filter Checked</button>
          <button onClick={this.mapUncheckedData}>Filter Unchecked</button>
        </header>
        <div className="MenuBar">
          <MenuBar
            data={data}
            mapFilteredData={this.mapFilteredData}
            searchData={this.searchData}
            goBackHome={this.goBackHome}
          />
          {/* <button onClick={this.checkConsole}>checkApp</button> */}
        </div>
        <div className="mainPage">
          <ToDoList
            data={data}
            sendCompleted={this.sendCompleted}
            deleteToDo={this.deleteToDo}
          />
        </div>
      </div>
    );
  }

  checkConsole = () => {
    console.log('this.state.data', this.state.data);
    console.log('this.state.originalData', this.state.originalData);
    console.log('this.props.data', this.props.data);
  };
}
