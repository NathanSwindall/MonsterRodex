import "./styles.css";
import React, { Component } from "react";
import CardList from "../src/components/card-list/card-list.component";
import SearchBox from "../src/components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.setState = this.setState.bind(this);

    this.state = {
      monsters: [],
      searchValue: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchValue } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          className="searchBox"
          handleOnChange={(e) => this.setState({ searchValue: e.target.value })} // because anonymous it doesn't go the next one up
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
