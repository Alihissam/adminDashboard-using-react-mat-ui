import React from 'react'
import Chart from '../chart/Chart';
import Featureinfo from '../Feature/Featureinfo';
import './home.css';
import { userdata } from '../../dummyData'
import Widgetsm from '../widgetSM/Widgetsm';
import WidgetLg from '../widgetLarge/WidgetLg';


const Home = () => {
    return (
        <div className="home">
            <Featureinfo />
            <Chart data={userdata} title="User Analytics" grid dataKey="active User" />
            <div className="widget_home">
                <Widgetsm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
