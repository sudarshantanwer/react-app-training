import React from 'react'
import './App.css';
import MyHeader from './header/header'
import UserList from "./userList/UserList";


class App extends React.Component {
    constructor() {
        super();
        const data = ['Abc', 'XYZ', 'Pqr', 'UML']
        this.state = {groupId: "31421", showUserList: true}

    }

    sendNewData = ()=>{
        let newGroupId = Math.random(1);
        this.setState({groupId: newGroupId})
    }

    deleteUserList = ()=>{
        this.setState({showUserList: false})
    }

   render()
    {
        console.log('Parent render')
        return (
            <div className="App">
                <MyHeader/>
                {
                  this.state.showUserList && <UserList groupId={this.state.groupId} data={"ABC"}/>
                }
                <button onClick={this.sendNewData}>Send New Data</button>
                <button onClick={this.deleteUserList}>Delete User List</button>
            </div>

        );
    }
}

export default App;
