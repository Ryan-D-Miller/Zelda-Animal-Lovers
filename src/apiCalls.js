const zeldaCall = "https://botw-compendium.herokuapp.com/api/v2";

const getCategory = (category) => {
    console.log()
    return fetch(`${zeldaCall}/category/${category}`)
        .then(res => {
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })
}

export {
    getCategory
}