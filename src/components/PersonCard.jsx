import React from 'react';

const PersonCard = props => {
    return (
        <div className="col-sm-4 mb-5">
            <div className="card tall">
                <div className="card-header bg-dark text-light">{props.last_name}, {props.first_name}
                </div>
                <div className="card-body">
                    <p>Age: {props.age}</p>
                    <p>Hair Color: {props.hair_color}</p>
                </div>
            </div>
        </div>
    );
}


export default PersonCard;