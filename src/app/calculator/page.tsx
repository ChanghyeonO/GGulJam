"use client";

import React, { useState } from "react";

const Calculator = () => {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");

  const calculateTime = () => {
    console.log(`${hour}:${minute}`);
    console.log(`${Number(hour) - 1}:${Number(minute) - 30}`);
  };

  const renderSelectOptions = (start: number, end: number) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      const value = i < 10 ? `0${i}` : i.toString();
      options.push(<option>{value}</option>);
    }
    return options;
  };

  return (
    <div
      className="
      flex flex-col items-center justify-center text-center 
      bg-container-bg rounded-3xl
      sm:w-full sm:h-96
      md:w-3/5 md:h-72
      lg:w-1/3 lg:h-72"
    >
      <div>
        <h1 className="text-2xl font-bold mb-8">
          🕖기상 시간을 체크해주세요.🕖
        </h1>
        <div className="flex items-center justify-center gap-5 mb-4">
          <div className="mb-4">
            <label htmlFor="hour-select" className="mr-2 font-bold">
              시 :
            </label>
            <select
              value={hour}
              onChange={e => setHour(e.target.value)}
              className="w-24 text-center border border-gray-400 bg-gray-300 rounded-md font-bold"
            >
              {renderSelectOptions(0, 23)}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="minute-select" className="mr-2 font-bold">
              분 :
            </label>
            <select
              id="minute-select"
              value={minute}
              onChange={e => setMinute(e.target.value)}
              className="w-24 text-center border border-gray-400 bg-gray-300 rounded-md font-bold"
            >
              {renderSelectOptions(0, 59)}
            </select>
          </div>
        </div>

        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
          onClick={calculateTime}
        >
          계산하기
        </button>
      </div>
    </div>
  );
};

export default Calculator;
