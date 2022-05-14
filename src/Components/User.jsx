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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedIndex !== this.props.selectedIndex) {
            this.getUser(this.props.selectedIndex + 1).then(user => {
                this.setState({
                    user
                })
            })
        }
    }

    render() {

        const { user } = this.state;
        return (
            <>
                {user &&
                    <div className="section" >
                        <p>id: {user.id}</p>
                        <p>name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>email: {user.email}</p>
                        <p>phone: {user.phone}</p>
                    </div>}
            </>
        )
    }
}
