
import React, {Component} from 'react'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {showData : true, groupId: 10000}
        console.log('constructor')
    }

    componentDidMount() {
        console.log('did mount')

    }


    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will recive props')

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should update')

        if (nextProps.groupId !== this.props.groupId){
            return true
        } else return false;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update')

    }

    componentWillUnmount() {
        console.log('will unmount')
    }

    show = ()=>{
        this.setState({showData: true})
    }

    hide = ()=>{
        this.setState({showData: false})
    }

    updateGroupId = ()=>{
        this.setState({groupId: this.state.groupId + 10})
    }

    render (){
        console.log('render')
        return <div>
            {
              this.state.showData && <div className="data-div">
                {/*<div>{this.state.groupId}</div>*/}
                <div>{this.props.groupId}</div>
                {/*<div>{this.props.data}</div>*/}
            </div>
            }
            {/*<button onClick={this.show}>Show Data</button>*/}
            {/*<button onClick={this.hide}>Hide Data</button>*/}
            {/*<button onClick={this.updateGroupId}>Update Group Id</button>*/}

        </div>
    }
}

export default UserList
