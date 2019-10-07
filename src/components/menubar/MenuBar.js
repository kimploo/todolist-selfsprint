import React, { Component } from 'react';
import Search from './Search'; // but test on testData.
import './menuBar.css';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.filterGroupOut = this.filterGroupOut.bind(this);
  }

  filterGroupOut(array) {
    const checkGroup = [];
    for (let i = 0; i < array.length; i++) {
      if (!checkGroup.includes(array[i].group)) {
        checkGroup.push(array[i].group);
      }
    }
    return checkGroup;
  }

  render() {
    const { data, searchData, goBackHome } = this.props;
    const filtered = this.filterGroupOut(data);

    return (
      <div className="sidenav">
        <Search searchData={searchData} goBackHome={goBackHome} />
        {filtered.map((value, index) => (
          <button onClick={() => this.props.mapFilteredData(value)} key={index}>
            {value}
          </button>
        ))}
      </div>
    );
  }
}

// should make filtered array for getting only one exisitng group

export default MenuBar;
