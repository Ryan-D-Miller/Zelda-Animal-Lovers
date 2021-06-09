import './Card.css';
import React from 'react';

function Cards({data}) {
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
            <div className="button-container"><button className="found-button">Found Friend</button></div>
        </section>
    ) 
}

export default Cards;
