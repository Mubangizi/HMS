import React from 'react'

import { Line } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Graph = ({total,diseases}) => {

    

    
  const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: '',
            },
        },
    };

    const labels = diseases;
    const data = {
        labels,
        datasets: [
            {
                label: 'diseases',
                data: total,
                borderColor: 'blue',
                //backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    };

console.log(data)
    
    return (
        <>
        <div>
                <Line options={options} data={data} />;
        </div>
          
        </>
       
    )
}

export default Graph
