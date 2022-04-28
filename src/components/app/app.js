import {Component} from "react";
import UserService from "../../services/user-service";

import User from "../user/user";
import Beer from "../beer/beer";

import "./app.scss";

class App extends Component {
    state = {
        dataUser: [],
        dataBeer: []
    }
    userService = new UserService();

    componentDidMount() {
        this.updateData();
        
    }
    updateData = () => {
        this.userService.getUser()
        .then ((data) => this.setState({dataUser: data}));
        this.userService.getBeer()
        .then ((data) => this.setState({dataBeer:data}));
    }
    

    render() { 
            return (
                <div>
                    <div className="app">
                    <User dataUser={this.state.dataUser}/>
                    <Beer dataBeer={this.state.dataBeer}/>
                    </div>
                    <button className="refresh" type="button"  onClick={this.updateData}>Обновить</button>
                    
                </div>
            
        )
    }

}
export default App;