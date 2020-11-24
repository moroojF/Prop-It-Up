import React, { Component } from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newAge: this.props.age
        };
    }

    addYear = e => {
        this.setState({ newAge: this.state.newAge + 1 })
    }

    render() {
        return (
            <div className="col-sm-4 mb-5">
                <div className="card tall">
                    <div className="card-header bg-dark text-light">{this.props.last_name}, {this.props.first_name}
                    </div>
                    <div className="card-body">
                        <p>Age: {this.state.newAge}</p>
                        <p>Hair Color: {this.props.hair_color}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-info btn-block at-bottom mt-auto mb-0" onClick={this.addYear}>Birthday Button For {this.props.first_name} {this.props.last_name}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonCard;