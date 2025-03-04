import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_SINGLE_POKEMON_DETAILS } from "../../Apollo/queries";

export default function Details() {
  const { name } = useParams();

  const { loading, error, data } = useQuery(GET_SINGLE_POKEMON_DETAILS, {
    variables: { name: name },
  });
 
  interface Stat {
    stat: {
      name: string;  // The name of the stat (e.g., "attack", "defense")
    };
    base_stat: number;  // The base value for the stat
  }

  interface Ability {
    ability: {
      name: string;
    };
  }

  interface PokemonType {
    type: {
      name: string; // The name of the type, e.g., "fire", "water", etc.
    };
  }

  const abilityColors: { [key: string]: string } = {
    grass: "bg-[#9BCC50]",
    poison: "bg-[#B97FC9]",
    fire: "bg-[#FC7C23]",
    flying: "bg-[#30A7D7]",
    water: "bg-[#30A7D7]",
    bug: "bg-[#729F3F]",
  };

  if (loading) return <p className="text-center text-3xl my-12">Loading Pokémon...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const pokemon = data?.pokemon;

  console.log(pokemon);

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


  if (!pokemon) return <p>Pokémon not found!</p>;

  return (
    <div className="">
      <div className="flex justify-between">
      <div>
        <img className="h-[200vh] w-[140px]" src="/images/Group-14.png" alt="" />
      </div>


      <div className="mx-5">


      <div className="flex justify-center items-center my-5">
        <img
          src="/images/Logo.png"
          alt="Pokemon Logo"
          className="w-24 sm:w-32"
        />
      </div>
      
      <div className="lg:grid grid-cols-3 justify-items-center lg:mt-24">
      <div className="w-full flex flex-col justify-center items-center gap-7 max-w-xs sm:max-w-sm lg:order-2  ">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  pokemon?.id ?? 0
                }.png`} alt={pokemon.name} className="w-full" />

                <div className="bg-[#00000033] w-[283px] blur-lg h-[40px] rounded-tr-[600px] rounded-tl-[600px] rounded-bl-[600px] rounded-br-[600px]"></div>
      </div>

      <div className="w-full  mt-5">
        <h1 className="text-[#257BC4] font-semibold text-lg sm:text-xl lg:order-1">
          {pokemon.name} <span>#00{pokemon.id}</span>
        </h1>
        <p className="text-sm">
        There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.
        </p>

        <div className="border-[#FC7C23] border-4 rounded-lg w-full sm:w-[80%] rounded-br-[50px] grid grid-cols-2 gap-3 p-4 mt-5">
          <div>
            <p className="font-semibold">Height</p>
            <p>{pokemon.height}</p>
          </div>
          <div>
            <p className="font-semibold">Category</p>
            <p>{pokemon.name}</p>
          </div>
          <div>
            <p className="font-semibold">Weight</p>
            <p>{pokemon.weight}</p>
          </div>
          <div>
            <p className="font-semibold">Abilities</p>
            <p>
  {pokemon.abilities.map((ability:Ability, index:number) => (
    <span key={ability.ability.name || index}>{ability.ability.name}</span>
  ))}
</p>
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-5 lg:order-3">
        <h1 className="font-semibold text-lg">Type</h1>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
        {pokemon.types.map((type: PokemonType,i:number) => (
    <span
     key={i}
      className={`rounded-lg px-4 text-white font-semibold py-1 ${
        abilityColors[type.type.name] || ""
      }`}
    >
      {type.type.name}
    </span>
  ))}
</div>


<h1 className="font-semibold text-lg">Weaknesses</h1>
<div className="flex flex-wrap gap-3 justify-center mt-2">
  {allTypes.slice(0,4).map((type: string, i: number) => (
    <span
      key={i}
      className={`rounded-lg px-4 text-white font-semibold py-1 ${
        abilityColors[type] || "bg-gray-500" // Default color if not found
      }`}
    >
      {type}
    </span>
  ))}
</div>


        <div className="w-full max-w-sm mx-auto mt-5">
          <h2 className="text-lg font-bold">Stats</h2>
          {pokemon.stats.map((stat:Stat, index:number) => (
            <div key={index} className="mb-3">
              <p className="text-sm font-medium">{stat.stat.name}</p>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${stat.base_stat}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

   
    </div>

    <div className="flex justify-center items-center my-12">
        <Link to={"/"} className="bg-[#FFCB05] px-7 py-2 rounded-lg text-xl my-12 text-center text-white font-semibold felx items-center gap-4"><span>🏠 Go Back To HomePage</span></Link>
      </div>



      </div>

      <div>
        <img className="h-[200vh] w-[140px]" src="/images/Group-14.png" alt="" />
      </div>
      </div>


     
    </div>
   
  );
}
