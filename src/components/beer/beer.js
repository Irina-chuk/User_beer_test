import {Component} from "react";


import "./beer.scss";

class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBeer: []
        }
    }

    componentDidMount() {
        this.setState({dataBeer: this.props.dataBeer});
        
    }

    render() {
        const {id, brand, name, ibu, alcohol} = this.props.dataBeer;
        
        return(
            <div className="beer" key={id}>
                <h2>Рекомендуемое пиво для вас</h2>
                <ul className="beer__info">
                    <li>Бренд: {brand}</li>
                    <li>Название: {name}</li>
                    <li>Степень горечи: {ibu}</li>
                    <li>Крепость: {alcohol}</li>
                </ul>
                

            </div>
            
        )
    }
}

export default Beer;