import { Link } from "react-router-dom";

interface Pokemon {
  id: number;
  name: string;
  image: string;
 
}

interface CardProps {
  pokemon: Pokemon;
}
// const abilityColors: { [key: string]: string } = {
//     Grass: "bg-[#9BCC50]",
//     Poison: "bg-[#B97FC9]",
//     Fire: "bg-[#FC7C23]",
//     Flying: "bg-[#30A7D7]",
//     Water: "bg-[#30A7D7]",
//     Bug: "bg-[#729F3F]",
//   };

const Card = ({ pokemon }: CardProps) => {
  return (
    <Link to={`/details/${pokemon.name}`}>
    <div className="relative cursor-pointer rounded-br-[100px] bg-white rounded-lg shadow-lg p-6 w-64 min-w-[256px] transition-transform hover:scale-105">
      {/* Pokemon Image */}
      <div className="w-full h-40 bg-gray-100 rounded-xl p-4 mb-6">
        {/* <span className="absolute top-4 left-4 text-gray-600 p-5 text-sm font-bold">
          {pokemon.mark}
        </span> */}

        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-center text-2xl font-bold mt-8 mb-4 capitalize">
        {pokemon.name}
      </h3>

      {/* Abilities Container
      <div className="flex flex-wrap gap-3 justify-center ">
        {pokemon.abilities.map((ability: string) => (
          <span
          key={`${pokemon.id}-${ability}`}
          className={`rounded-lg px-[9px] text-white font-semibold py-[2px] ${abilityColors[ability] || ""}`}
        >
          {ability}
        </span>
        ))}
      </div> */}
    </div></Link>
  );
};

export default Card;
