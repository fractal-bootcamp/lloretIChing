import React from "react";

interface Hexagram {
  number?: number; // Optional property for the number of the hexagram
  name?: string; // Optional property for the name of the hexagram
  description?: string; // Optional property for the description of the hexagram
  ideogram?: string; // Optional property for the ideogram of the hexagram
  ancientChinese?: {
    character?: string; // Optional property for the Chinese character
    pronunciation?: string; // Optional property for the pronunciation
  };
}

interface Data {
  IChing: Hexagram[];
}

const Card: React.FC<Hexagram> = ({
  number,
  name,
  description,
  ideogram,
  ancientChinese,
}: Hexagram) => {
  const { character, pronunciation } = ancientChinese || {};

  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <h2 className="p-20 text-4xl">{ideogram}</h2>
          <h3 className="pt-10 pb-5 text-lg">{character}</h3>
          <h3 className="pt-0 pb-20 text-sm">{pronunciation}</h3>
          <p className="pt-0 pb-20 text-lg">{description}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
