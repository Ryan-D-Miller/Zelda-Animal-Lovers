import './Card.css';
import React from 'react';

function Cards({data}) {
    {if(data.common_locations){
        console.log(data.common_locations[0])
    }}
    return (
        <section className="card">
            <img className="card-img" src={data.image} alt=""/>
            <p>{data.name}</p>
            <p>{data.description}</p>
            <div><button>Found Friend</button></div>
        </section>
    ) 
}

export default Cards;



// category: "creatures"
// common_locations: (2)["Lanayru Wetlands", "Akkala Highlands"]
// description: "These wild cows come equipped with big, strong horns. They live off grass that grows near the waterfront. Their meat is considered to be high quality, so they're a common target among hunters. Fun Fact: the domesticated Hateno cow, often raised in villages, was bred through selective breeding using these."
// drops: (2)["raw prime meat", "raw gourmet meat"]
// id: 16
// image: "https://botw-compendium.herokuapp.com/api/v2/entry/water_buffalo/image"
// name: "water buf