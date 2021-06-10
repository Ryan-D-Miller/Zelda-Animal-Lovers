import './Card.css';
import React from 'react';
import emptyTriforce from '../../Assets/triforce_empty.png';
import filledTriforce from '../../Assets/triforce_filled.png';
import PropTypes from 'prop-types';

function Card({name, image, description, id, common_locations, isFound,updateFound}) {
    // {if(common_locations){
    //     // console.log(data.common_locations[0])
    // }}
    return (
        <section className="card">
            <img className="card-img" src={image} alt=""/>
            <div>
                <p className="name">{name}</p>
                <p className="description">{description}</p>
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
