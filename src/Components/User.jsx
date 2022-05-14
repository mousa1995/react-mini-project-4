import React from 'react'

export default class User extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    async getUser(id) {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return await user.json();
    }

    componentDidMount() {
        this.getUser(this.props.selectedIndex + 1).then(user => {
            this.setState({
                user
            })
        })
    }

    render() {
        return (
            <div className="section" >
                <p>id: 1</p>
                <p>name: name test</p>
                <p>username: user name</p>
                <p>email: test@test.com</p>
                <p>phone: 009891836658</p>
            </div>
        )
    }
}
