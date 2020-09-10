import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newItem: "",
    };
  }

  addItem(toDoValue) {
    if (toDoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: toDoValue,
        isDone: false,
      };

      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list: list,
        newItem: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title"> T0Do App </h1>
        <div className="container">
          Add an item...
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a todo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            {" "}
            Add To Do{" "}
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id="" /> Record
                <button className="btn"> Delete </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
