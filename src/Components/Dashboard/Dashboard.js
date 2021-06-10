import './Dashboard.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

function Dashboard({data, updateFound, title}) {

    const displayCards = data.map(data => {
        return (
            <Card 
                image={data.image} 
                name={data.name} 
                description={data.description} 
                id={data.id} 
                common_locations={data.common_locations}
                isFound={data.isFound}
                key={data.id} 
                updateFound={updateFound}
            />
        )
    });

    return (
        <section className="dashboard">
            <h2>{title}</h2>
            <main>
                {displayCards}
            </main>
        </section>
    )
}

Dashboard.prototypes = {
    title: PropTypes.string,
    data: PropTypes.object,
    updateFound: PropTypes.func
}

export default Dashboard;



