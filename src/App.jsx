import React from 'react';
import './App.css';
import MyHeader from './header/header';
import UserList from './userList/UserList';
import Counter from './counter/counter';

class App extends React.Component {
  constructor() {
    super();
    const data = ['Abc', 'XYZ', 'Pqr', 'UML'];
    this.state = { groupId: '31421', showUserList: true };
    if (this.greed([1, 1, 1, 1, 1]) != 1200) {
      console.log('Error!');
    }
    if (this.greed([1, 1, 5, 5, 5]) != 700) {
      console.log(this.greed([1, 1, 5, 5, 5]));
    }
    if (this.greed([1, 1, 3, 3, 3]) != 500) {
      console.log('Error!');
    }
    if (this.greed([1, 1, 4, 4, 4]) != 600) {
      console.log('Error!');
    }
    if (this.greed([1, 1, 2, 2, 2]) != 400) {
      console.log('Error!');
    }
    if (this.greed([5, 5, 5, 5, 5]) != 600) {
      console.log('Error!');
    }
    if (this.greed([1, 2, 3, 4, 5]) != 150) {
      console.log('Error!');
    }
    if (this.greed([1, 1, 1, 5, 1]) != 1150) {
      console.log('Error!');
    } if (this.greed([2, 3, 4, 6, 2]) != 0) {
      console.log('Error!');
    } if (this.greed([3, 4, 5, 3, 3]) != 350) {
      console.log('Error!');
    } if (this.greed([1, 5, 1, 2, 4]) != 250) {
      console.log('Error!');
    }
  }

  sendNewData = () => {
    const newGroupId = Math.random(1);
    this.setState({ groupId: newGroupId });
  };

  deleteUserList = () => {
    this.setState({ showUserList: false });
  };

  greed = (arr) => {
    console.log(arr);
    const dice = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
    };
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      dice[arr[i]] = dice[arr[i]] + 1;
    }

    total = this.optimiser1(dice, total, 1, 1000, 100, 1000);
    total = this.optimiser1(dice, total, 5, 0, 50, 500);

    total = this.optimiser(dice, 2, total);
    total = this.optimiser(dice, 3, total);
    total = this.optimiser(dice, 4, total);
    total = this.optimiser(dice, 5, total);

    return total;
  };

  optimiser1 = (dice, total, diceNumber, x, y, z) => {
    if (dice[diceNumber] === 3) {
      total += x;
    }
    if (dice[diceNumber] < 3) {
      total += dice[diceNumber] * y;
    } if (dice[diceNumber] > 3) {
      total = total + (dice[diceNumber] - 3) * y + z;
    }

    return total;
  };

  optimiser = (dice, diceNumber, total) => {
    if (dice[diceNumber] === 3) {
      total += diceNumber * 100;
    }
    return total;
  };

  render() {
    return (
      <div className="App">
        <MyHeader />
        {
                  this.state.showUserList && <UserList groupId={this.state.groupId} data="ABC" />
                }
        <button onClick={this.sendNewData}>Send New Data</button>
        <button onClick={this.deleteUserList}>Delete User List</button>
        <Counter />
      </div>

    );
  }
}

export default App;
