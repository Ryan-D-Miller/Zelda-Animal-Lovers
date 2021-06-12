import './Card.css';
import React from 'react';
import emptyTriforce from '../../Assets/triforce_empty.png';
import filledTriforce from '../../Assets/triforce_filled.png';
import PropTypes from 'prop-types';

function Card({name, image, description, id, common_locations, isFound,updateFound}) {

    return (
        <section className="card">
            <img className="card-img" src={image} alt=""/>
            <div>
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p className="description">Locations Found:</p>
                <p>{common_locations}</p>
                {!common_locations && <p>No known locations</p>}
            </div>
            <div className="button-container">
                <button className="found-button" onClick={() => updateFound(id)}>
                    {!isFound ? "Met Friend"  : "Not Met Friend"}
                    {!isFound ? <img className="button_img" src={emptyTriforce} alt="Empty Triforce"/> : <img className="button_img" alt="Triforce" src={filledTriforce} />}
                </button>
            </div>
        </section>
    ) 
}

Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    isFound: PropTypes.bool,
    updateFound: PropTypes.func,
    common_locations: PropTypes.arrayOf(PropTypes.string),
}

export default Card;
