import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({ title, data, dataKey, grid }) => {


    return (
        <div className="chart">
            <h4 className="charttitle">{title}</h4>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
