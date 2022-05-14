import React, { Component } from 'react'

export default class UserSelect extends Component {
    render() {
        return (
            <>
                <p className="section">
                    Users:
                    {this.props.users && this.props.users.map((user, idx) => {
                        return (
                            <label key={user}>
                                <input
                                    type="radio"
                                    name="user"
                                    checked={idx == this.props.selectedIndex}
                                    onChange={() => this.props.handleChangeUser(idx)} />
                                {user}
                            </label>
                        )
                    })}
                </p>
            </>
        )
    }
}
