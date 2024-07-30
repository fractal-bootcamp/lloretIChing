import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import data from "./components/data/data.json";

export interface Hexagram {
  number: number;
  name: string;
  description: string;
  ideogram: string;
  ancientChinese: string;
}

interface Data {
  IChing: Hexagram[];
}

const ichingData: Hexagram[] = (data as Data).IChing;

function App() {
  const [randomHexagram, setRandomHexagram] = useState<Hexagram | null>(null);

  const handleClick = () => {
    const getRandomHexagram = () => {
      const randomIndex = Math.floor(Math.random() * ichingData.length);
      return ichingData[randomIndex];
    };

    setRandomHexagram(getRandomHexagram());
  };

  return (
    <>
      <div className="flex-column items-center py-20 justify-center h-screen bg-amber-100">
        <h1 className="text-xs font-bold text-teal-900 justify-center">
          I Ching - The book of Changes
        </h1>
        <div className="flex flex-col items-center">
          <Card {...randomHexagram} />
          <button
            className=" p-10 border-4 border-teal-900 border-double ring-8 rounded-full"
            onClick={handleClick}
          >
            <p className="font-bold text-teal-950 text-4xl p-2 border-4 border-teal-900">
              貞
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
