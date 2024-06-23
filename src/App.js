import React, { useEffect } from 'react'
import { chart } from './chart'
import { getChartData } from './data'
import './styles.scss'

export const App = () => {

  useEffect(() => {
    const myChart = chart(document.getElementById('chart'), getChartData());
    myChart.init()
  }, [])

  return (
    <div className="container">
      <div className="card">
        <div className="tg-chart" id="chart">
          <div data-el="tooltip" className="tg-chart-tooltip"></div>
          <canvas data-el="main"></canvas>

          <div className="tg-chart-slider" data-el="slider">
            <canvas></canvas>
            <div data-el="left" className="tg-chart-slider__left">
              <div
                className="tg-chart-slider__arrow--left"
                data-el="arrow"
                data-type="left"
              ></div>
            </div>

            <div
              data-el="window"
              data-type="window"
              className="tg-chart-slider__window"
            ></div>

            <div data-el="right" className="tg-chart-slider__right">
              <div
                className="tg-chart-slider__arrow--right"
                data-el="arrow"
                data-type="right"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
