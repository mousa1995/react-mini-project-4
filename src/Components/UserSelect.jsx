import React, { Component } from 'react'

export default class UserSelect extends Component {
    render() {
        return (
            <>
                <p className="section">
                    Users:
                    <label>
                        <input type="radio" name="user" />
                        1
                    </label>
                    <label>
                        <input type="radio" name="user" />
                        2
                    </label>
                    <label>
                        <input type="radio" name="user" />
                        3
                    </label>
                    <label>
                        <input type="radio" name="user" />
                        4
                    </label>

                </p>
            </>
        )
    }
}
