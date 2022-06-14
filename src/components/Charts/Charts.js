import React, {useState} from 'react'
import { Bar, PolarArea } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto' 
import './Charts.css'

export const Charts = () => {

  const yearErning = [
    {year: 2017, earn: 37000},
    {year: 2018, earn: 25000},
    {year: 2019, earn: 23000},
    {year: 2020, earn: 12000},
    {year: 2021, earn: 26000},
  ]

  const monthEarning = [
    {month: 'January', earn: 2100},
    {month: 'February', earn: 1500},
    {month: 'March', earn: 3200},
    {month: 'April', earn: 1900},
    {month: 'May', earn: 2700},
    {month: 'June', earn: 1000},
    {month: 'July', earn: 3700},
    {month: 'August', earn: 1300},
    {month: 'September', earn: 2200},
    {month: 'October', earn: 2700},
    {month: 'November', earn: 3300},
    {month: 'December', earn: 2800},
  ]

  const [yearEarningData, setYearEarningData] = useState({
    labels: yearErning.map(data => data.year),
    datasets: [{
      label: 'Annual Earnings',
      data: yearErning.map(data => data.earn),
      backgroundColor: [     
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(153, 102, 255)',
      'rgb(54, 162, 235)'],
      // borderColor: 'black',
      // borderWidth: 1,
    }]
  })

  const [monthEarningData, setMonthEarningData] = useState({
    labels: monthEarning.map(data => data.month),
    datasets: [{
      label: 'Monthly Earnings',
      data: monthEarning.map(data => data.earn),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(153, 102, 255)',
        'rgb(54, 162, 235)',
        'rgba(201, 203, 207)',
        'rgba(235, 91, 241)',
        'rgba(91, 241, 160)',
        'rgba(248, 161, 113)',
        'rgba(96, 61, 248)',
        'rgba(61, 240, 248)',
        'rgba(244, 102, 158, 1)']
     }]
   }
  )

  return (
    <div className='graphBox'>
      <div className='box1'><PolarArea data={yearEarningData}/></div>
      <div className='box2'><Bar data={monthEarningData} /></div>
    </div>
  )
}
