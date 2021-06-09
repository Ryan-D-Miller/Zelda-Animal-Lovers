import './Dashboard.css';
import Card from '../Card/Card';
import { Route, Switch, Redirect } from 'react-router-dom';

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



