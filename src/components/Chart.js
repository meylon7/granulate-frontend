import React, { useEffect, useState } from 'react'
import { Bar } from '@reactchartjs/react-chart.js'
import '../styles/text-effect.css'
const rand = () => Math.round(Math.random() * 20 - 10)

const genData = () => ({
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Scale',
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
})

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const CHART_AREA = {
    width:'80%',
    margin: '0 auto',
    maxHeight:'400px',
    textAlign: 'center',
    left:'200px'
}
const Chart = () => {
    const [data, setData] = useState(genData())
  
    useEffect(() => {
      const interval = setInterval(() => setData(genData()), 5000)
  
      return () => clearInterval(interval)
    }, [])
  
    return (
      <>
        <div className='header'>
            <div style={CHART_AREA}>
                <h1 className='title-effect'>Dynamic Bar Chart</h1>
                <Bar width={500} data={data} options={options} />
            </div>
        </div>
        
      </>
    )
  }
  

export default Chart;