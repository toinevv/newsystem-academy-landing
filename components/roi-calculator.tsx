"use client"

import { useState } from "react"

export default function ROICalculator() {
  const [operators, setOperators] = useState(10)
  const [hoursPerDay, setHoursPerDay] = useState(3)
  const [hourlyRate, setHourlyRate] = useState(23)

  const monthlyHoursSaved = operators * hoursPerDay * 22 // 22 working days
  const monthlySavings = monthlyHoursSaved * hourlyRate
  const pilotPaybackWeeks = Math.ceil(13800 / (monthlySavings / 4.33)) // weeks in a month
  const annualROI = Math.round(((monthlySavings * 12 - 13800) / 13800) * 100)

  return (
    <section className="section bg-[#051a25]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">See Your Potential Savings</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Controls */}
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-medium mb-4">
                  Number of operators: <span className="text-[#2DD4BF]">{operators}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={operators}
                  onChange={(e) => setOperators(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-[#FFFFFF]/70 mt-1">
                  <span>5</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium mb-4">
                  Hours/day on repetitive tasks: <span className="text-[#2DD4BF]">{hoursPerDay}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-[#FFFFFF]/70 mt-1">
                  <span>1</span>
                  <span>6</span>
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium mb-4">
                  Average hourly rate: <span className="text-[#2DD4BF]">€{hourlyRate}</span>
                </label>
                <input
                  type="range"
                  min="14"
                  max="46"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-[#FFFFFF]/70 mt-1">
                  <span>€14</span>
                  <span>€46</span>
                </div>
              </div>
            </div>

            {/* Live Calculations */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Your Potential Savings</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Monthly hours saved:</span>
                  <span className="text-[#2DD4BF] font-bold text-xl">{monthlyHoursSaved.toLocaleString()} hours</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Monthly savings:</span>
                  <span className="text-[#2DD4BF] font-bold text-xl">€{monthlySavings.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Pilot payback:</span>
                  <span className="text-[#2DD4BF] font-bold text-xl">
                    {pilotPaybackWeeks <= 4
                      ? `Week ${pilotPaybackWeeks}`
                      : `${Math.ceil(pilotPaybackWeeks / 4.33)} months`}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="font-semibold">Annual ROI:</span>
                  <span className="text-[#2DD4BF] font-bold text-2xl">{annualROI.toLocaleString()}%</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-6 rounded-md transition-all duration-200 ease-in-out hover:bg-opacity-90">
                Calculate My ROI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
