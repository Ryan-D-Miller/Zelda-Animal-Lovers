import './Dashboard.css';
import Card from '../Card/Card';

function Dashboard({data}) {

    const displayCards = data.map(data => {
        return (
            <Card data={data} key={data.id}/>
        )
    });

    return (
        <section className="dashboard">
            Animals!
            <main>
                {displayCards}
            </main>
        </section>
    )
}

export default Dashboard;



