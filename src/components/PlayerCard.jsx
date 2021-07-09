import { render } from '@testing-library/react'
import React, {Component} from 'react'


class PlayerCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            age: this.props.age
        }
        
    }

    
    birthdayButton = () => {
        this.setState({
            age: this.state.age + 1
        })
    }
    


    render(){
        return(
            <div>
                <h1>{this.props.last_name}, {this.props.first_name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hair_color}</p>
                <button onClick={this.birthdayButton}>Birthday Button for {this.props.first_name} {this.props.last_name}</button>
            </div>
        )
    }
}

export default PlayerCard
