import './Dashboard.css';
import Card from '../Card/Card';

function Dashboard({data, updateFound}) {

    const displayCards = data.map(data => {
        return (
            <Card data={data} key={data.id} updateFound={updateFound}/>
        )
    });

    return (
        <section className="dashboard">
            <h2>Animals!</h2>
            <main>
                {displayCards}
            </main>
        </section>
    )
}

export default Dashboard;



