import './Card.css';
import React from 'react';
import emptyTriforce from '../../Assets/triforce_empty.png';
import filledTriforce from '../../Assets/triforce_filled.png';

function Cards({data, updateFound}) {
    {if(data.common_locations){
        // console.log(data.common_locations[0])
    }}
    return (
        <section className="card">
            <img className="card-img" src={data.image} alt=""/>
            <div>
                <p className="name">{data.name}</p>
                <p className="description">{data.description}</p>
            </div>
            <div className="button-container">
                <button className="found-button" onClick={() => updateFound(data.id)}>
                    {!data.isFound ? "Met Friend"  : "Not Met Friend"}
                    {!data.isFound ? <img className="button_img" src={emptyTriforce} /> : <img className="button_img" src={filledTriforce} />}
                </button>
            </div>
        </section>
    ) 
}

export default Cards;
