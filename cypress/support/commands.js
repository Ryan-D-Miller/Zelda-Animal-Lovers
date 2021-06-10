
Cypress.Commands.add('loadStubs', () => {
    const baseURL = "https://botw-compendium.herokuapp.com/api/v2";

    cy.intercept(`${baseURL}/category/creatures`,{
        "data": [{
            "category": "creatures",
            "common_locations": (2)["Hyrule Field", "Faron Grasslands"],
            "description": "These can most often be found on plains. Their usefulness as transportation has made them valuable since ancient times. That said, wild horses do tend to get spooked and run off when approached, so if you're looking to snag one, it's best to sneak up on it.",
            "drops": [],
            "id": 1,
            "image": "https://botw-compendium.herokuapp.com/api/v2/entry/horse/image",
            "name": "horse",
            },
            {
                "category": "creatures",
                "common_locations": (2)["Lanayru Wetlands", "Akkala Highlands"],
                "description": "These wild cows come equipped with big, strong horns. They live off grass that grows near the waterfront. Their meat is considered to be high quality, so they're a common target among hunters. Fun Fact: the domesticated Hateno cow, often raised in villages, was bred through selective breeding using these.",
                "drops": (2)["raw prime meat", "raw gourmet meat"],
                "id": 16,
                "image": "https://botw-compendium.herokuapp.com/api/v2/entry/water_buffalo/image",
                "name": "water buffalo",
            },
            {
                "category": "creatures",
                "common_locations": ["Gerudo Desert"],
                "description": "These seals use their large flippers to move through the sand as if swimming. They were once wild animals but have since been domesticated by the Gerudo. They rely on their excellent hearing to find their way while riding submerged in the sand.Their large, distinct tusks look pretty ferocious, but their favorite food is actually fruit.",
                "drops": [],
                "id": 7,
                "image": "https://botw-compendium.herokuapp.com/api/v2/entry/sand_seal/image",
                "name": "sand seal"
            }
        ]
        }
    );
})
