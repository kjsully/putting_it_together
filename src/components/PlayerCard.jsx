import React, {Component} from 'react'


class PlayerCard extends Component {
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
        const{last_name, first_name, hair_color} = this.props
        return(
            <div>
                <h1>{last_name}, {first_name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hair_color}</p>
                <button onClick={this.birthdayButton}>Birthday Button for {this.props.first_name} {this.props.last_name}</button>
            </div>
        )
    }
}

export default PlayerCard
