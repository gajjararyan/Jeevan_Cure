"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { chartOptions1, barChart } from "@/constants";

export default function YearlyReport() {
  return (
    <div
      className="w-full flex flex-col items-start gap-10 mx-auto borde
    shadow-black p-5 rounded-2xl shadow-md"
    >
      <div className="flex justify-between items-center gap-10 w-full pr-12">
        <h3 className="font-medium font-serif text-4xl ">Activity Growth</h3>
        <div className="flex gap-3">
          <p className="w-6 h-6 bg-blue-600 rounded-full"></p>Yoga
          <p className="w-6 h-6 bg-green-600 rounded-full"></p>Meditation
          <p className="w-6 h-6 bg-red-600 rounded-full"></p>Aerobics
        </div>
      </div>
      <Bar className="max-h-[400px] w-full" data={barChart} options={chartOptions1} />
    </div>
  );
}
