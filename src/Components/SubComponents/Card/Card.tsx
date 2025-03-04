import { Link } from "react-router-dom";

interface Pokemon {
  id: number;
  name: string;
  image: string;
 
}

interface CardProps {
  pokemon: Pokemon;
}


const allTypes = [
    
  "fire",
  "water",
  "poison",
  "grass",
  "ice",
  "fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
];

const abilityColors: { [key: string]: string } = {
    grass: "bg-[#9BCC50]",
    poison: "bg-[#B97FC9]",
    fire: "bg-[#FC7C23]",
    flying: "bg-[#30A7D7]",
    water: "bg-[#30A7D7]",
    bug: "bg-[#729F3F]",
  };

const Card = ({ pokemon }: CardProps) => {
  return (
    <Link to={`/details/${pokemon.name}`}>
    <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 76%, 76% 100%, 0 100%, 0% 50%)" }} className="relative cursor-pointer  bg-white rounded-lg shadow-lg p-2 w-64 min-w-[256px] transition-transform hover:scale-105">
      {/* Pokemon Image */}
      <div className="w-full h-40 bg-gray-100 rounded-xl p-4 mb-6">
        <span className="absolute top-1 left-1 text-gray-600 p-5 text-sm font-bold">
          #010
        </span>

        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-left text-2xl font-bold mt-8 px-4 py-2 capitalize">
        {pokemon.name}
      </h3>

      {/* Abilities Container */}
      <div className="flex flex-wrap gap-3 justify-start px-4 py-2 ">
      {Array.isArray(allTypes) &&
    allTypes.slice(0, 2).map((ability: string, i: number) => (
      <span
        key={i}
        className={`rounded-lg px-[9px] text-white font-semibold py-[2px] ${
          abilityColors[ability] || "bg-gray-500"
        }`}
      >
        {ability}
      </span>
    ))}
      </div>
    </div></Link>
  );
};

export default Card;
