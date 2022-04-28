import {Component} from "react";


import "./user.scss";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: []
        }
    }
    
   
    render() {
        const {id, photo, first_name, data_birth, employment} = this.props.dataUser;
        const data = new Date();
        const t = Date.parse(data) - Date.parse(data_birth);
        const age = Math.floor(t/(1000*60*60*24*365));
        return (
            <div className="user" key={id}>
                <h2>Карточка сотрудника</h2>
                <div className="user__info">
                    <h3>{first_name}</h3>
                    <img src={photo} alt="photo" />
                    <ul className="user__descr">
                        <li>Возраст: {age}</li>
                        <li>Должность: {employment}</li>
                    </ul>
                    </div>
            </div>
        );
    }
}

export default User;