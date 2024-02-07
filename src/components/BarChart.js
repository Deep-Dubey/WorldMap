import React from 'react'
import "./BarChart.css"
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from 'react-chartjs-2';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function BarChart() {
    const data = {
        labels: ['','','','','',''],
        datasets: [
            {
                label: 'Sales Figure $10,430',
                data: [9,9,9,9,9,9],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
                borderBottomColor: 'yellow'
            }
        ]
    }
    const options = {
        scales: {
            y: {
              display: false // Hide y-axis
            }
          }
    }
  return (
    <div>
        <Bar
           data={data}
           options={options} 
        ></Bar>
    </div>
  )
}

export default BarChart