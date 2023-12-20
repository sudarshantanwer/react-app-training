import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: false, groupId: '', name: '', age: '',
    };
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps, nextContext) {

  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  componentWillUnmount() {
  }

  show = () => {
    this.setState({ showData: true });
  };

  hide = () => {
    this.setState({ showData: false });
  };

  updateGroupId = () => {
    this.setState({ groupId: this.state.groupId + 10 });
  };

  updateText = (evt, key) => {
    this.setState({ groupId: evt.target.value });
  };

  render() {
    return (
      <div>
        {
              this.state.showData && (
              <div className="data-div">
                <div>{this.state.groupId}</div>
                <div>{this.props.groupId}</div>
                <div>{this.props.data}</div>
              </div>
              )
            }

        <input type="text" value={this.state.groupId} onChange={(evt) => { this.updateText(evt, 'groupId'); }} />
        <button onClick={this.show}>Show Data</button>
        <button onClick={this.hide}>Hide Data</button>
        <button onClick={this.updateGroupId}>Update Group Id</button>

      </div>
    );
  }
}

export default UserList;
