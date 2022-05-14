import React, { Component } from 'react'
import User from './User';
import UserSelect from './UserSelect';

export default class UsersList extends Component {
    render() {
        return (
            <>
                <div>
                    <UserSelect />
                    <User />
                </div>
            </>
        )
    }
}
