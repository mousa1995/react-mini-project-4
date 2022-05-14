import React, { Component } from 'react'
import User from './User';
import UserSelect from './UserSelect';

export default class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }

        this.handleChangeUser = this.handleChangeUser.bind(this);
    }

    users = [1, 2, 3, 4];

    handleChangeUser(index) {
        this.setState({
            selectedIndex: index
        })
    }

    render() {
        return (
            <>
                <div>
                    <UserSelect
                        selectedIndex={this.state.selectedIndex}
                        users={this.users}
                        handleChangeUser={this.handleChangeUser} />
                    <User
                        selectedIndex={this.state.selectedIndex} />
                </div>
            </>
        )
    }
}
