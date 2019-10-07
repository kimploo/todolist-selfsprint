import React, { Component } from 'react';

const shortid = require('shortid');

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      text: '',
      group: '',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeGroup = this.handleChangeGroup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(event) {
    this.setState({
      text: event.target.value,
    });
    console.log('handleChangeInput works', event.target.value);
  }

  handleChangeGroup(event) {
    this.setState({
      group: event.target.value,
    });
    console.log('handleChangeGroup works', event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addToDo({
      id: shortid.generate(),
      title: this.state.text,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      group: this.state.group,
    });
    this.setState({
      text: '',
    });
  }

  checkConsole = () => {
    console.log('this.state.data', this.state.data);
    console.log('this.props.data', this.props.data);
  };

  render() {
    return (
      <div>
        Procrastination sucks, Do your todos !
        <div>
          {/* <button onClick={this.checkConsole}>checkConsole</button> */}
          <input
            type="input"
            value={this.state.text}
            onChange={this.handleChangeInput}
            placeholder="Please write your Todos..."
          />
          <p>
            <input
              type="input"
              value={this.state.group}
              onChange={this.handleChangeGroup}
              placeholder="Please group of your Todos..."
            />
          </p>
          <button onClick={this.handleSubmit}>submit</button>
        </div>
      </div>
    );
  }
}

export default Head;
