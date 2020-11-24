import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        return (
            <div className="col-sm-4 mb-5">
                <div className="card tall">
                    <div className="card-header bg-dark text-light">{this.props.last_name}, {this.props.first_name}</div>
                    <div className="card-body">
                        <p>Age: {this.props.age}</p>
                        <p>Hair Color: {this.props.hair_color}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonCard;