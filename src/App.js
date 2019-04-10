import React, { Component } from 'react';

const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    name: 'gromov',
    age: 100,
    cool: true
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          updateState: () => {
            return this.setState({
              age: this.state.age + 1
            });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = props => (
  <div className="family">
    <Person />
  </div>
);

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p className="first">i`m a first comp</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}
class Person extends Component {
  render() {
    return (
      <div className="second">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>name: {context.state.name}</p>
              <p>age: {context.state.age}</p>
              <button onClick={context.updateState}>
                Update state
              </button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default App;
