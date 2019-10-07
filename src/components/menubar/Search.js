import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.saveValue = this.saveValue.bind(this);
  }

  saveValue(event) {
    const { searchData, goBackHome } = this.props;

    if (event.keyCode === 13) {
      const str = event.target.value;
      searchData(str);
    }
    if (event.keyCode === 27) {
      goBackHome();
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.saveValue} />
      </div>
    );
  }
}

export default Search;
