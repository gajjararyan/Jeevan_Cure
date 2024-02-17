import { chartData, chartOptions, healthchart } from '@/constants';
import React from 'react'
import { Line } from 'react-chartjs-2';

export default function HealthGraphs() {
  return (
      <div className="flex flex-wrap justify-center items-center w-full gap-10 my-20">
        {healthchart.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-lg shadow-black shadow-md p-5"
          >
            <div className="flex items-center gap-3 ">
              {/* <MdWaterDrop
                  size={52}
                  className="bg-red-500/50 text-red-600 p-2 rounded-xl"
                /> */}
              {data.icon}
              <span className="font-semibold text-xl">{data.title}</span>
            </div>
            <div className="flex flex-col">
              <p className="flex items-center gap-1 text-gray-500">
                <span className="text-black text-3xl">{data.value}</span>
                {data.deb}
              </p>
            </div>
            <p
              className={`${data.color}  text-black tracking-wider 
              rounded-lg p-1 px-2 font-semibold w-max`}
            >
              Normal
            </p>
            <div>
              <Line data={chartData[index]} options={chartOptions} />
            </div>
          </div>
        ))}
      </div>
  );
}
