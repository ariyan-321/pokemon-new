
import { Link, useParams } from "react-router-dom";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string[];
  height: string;
  weight: string;
  ability: string;
  mark: string;
  category: string;
  description: string;
}

const abilityColors: { [key: string]: string } = {
  Grass: "bg-[#9BCC50]",
  Poison: "bg-[#B97FC9]",
  Fire: "bg-[#FC7C23]",
  Flying: "bg-[#30A7D7]",
  Water: "bg-[#30A7D7]",
  Bug: "bg-[#729F3F]",
};

export default function Details() {
  const { id } = useParams();
  const pokemons: Pokemon[] = [
    {
      id: 1,
      name: "Bulbasaur",
      image: "/images/img-1.png",
      type: ["Grass", "Poison"],
      ability: "Overgrow",
      height: "0.7 m",
      weight: "6.9 kg",
      category: "Seed Pokémon",
      mark: "#001",
      description:
        "A small, quadruped Pokémon with a plant bulb on its back that grows as it evolves.",
    },
    {
      id: 2,
      name: "Ivysaur",
      image: "/images/img-2.png",
      type: ["Grass", "Poison"],
      ability: "Overgrow",
      height: "1.0 m",
      weight: "13.0 kg",
      category: "Seed Pokémon",
      mark: "#002",
      description:
        "The evolved form of Bulbasaur, with a growing plant bud on its back.",
    },
    {
      id: 3,
      name: "Venusaur",
      image: "/images/img-3.png",
      type: ["Grass", "Poison"],
      ability: "Overgrow",
      height: "2.0 m",
      weight: "100.0 kg",
      category: "Seed Pokémon",
      mark: "#003",
      description:
        "A large, dinosaur-like Pokémon with a fully bloomed flower on its back.",
    },
    {
      id: 4,
      name: "Charmander",
      image: "/images/img-4.png",
      type: ["Fire"],
      ability: "Blaze",
      height: "0.6 m",
      weight: "8.5 kg",
      category: "Lizard Pokémon",
      mark: "#004",
      description:
        "A small, fire-type lizard Pokémon with a flame on its tail that indicates its health.",
    },
    {
      id: 5,
      name: "Charmeleon",
      image: "/images/img-5.png",
      type: ["Fire"],
      ability: "Blaze",
      height: "1.1 m",
      weight: "19.0 kg",
      category: "Flame Pokémon",
      mark: "#005",
      description:
        "The evolved form of Charmander, known for its aggressive nature and stronger fire attacks.",
    },
    {
      id: 6,
      name: "Charizard",
      image: "/images/img-6.png",
      type: ["Fire", "Flying"],
      ability: "Blaze",
      height: "1.7 m",
      weight: "90.5 kg",
      category: "Flame Pokémon",
      mark: "#006",
      description:
        "A powerful dragon-like Pokémon that can fly and unleash intense fire blasts.",
    },
    {
      id: 7,
      name: "Squirtle",
      image: "/images/img-7.png",
      type: ["Water"],
      ability: "Torrent",
      height: "0.5 m",
      weight: "9.0 kg",
      category: "Tiny Turtle Pokémon",
      mark: "#007",
      description:
        "A small turtle Pokémon that uses water-based attacks and withdraws into its shell for protection.",
    },
    {
      id: 8,
      name: "Wartortle",
      image: "/images/img-8.png",
      type: ["Water"],
      ability: "Torrent",
      height: "1.0 m",
      weight: "22.5 kg",
      category: "Turtle Pokémon",
      mark: "#008",
      description:
        "The evolved form of Squirtle, with a stronger shell and larger tail for balance in water.",
    },
    {
      id: 9,
      name: "Blastoise",
      image: "/images/img-9.png",
      type: ["Water"],
      ability: "Torrent",
      height: "1.6 m",
      weight: "85.5 kg",
      category: "Shellfish Pokémon",
      mark: "#009",
      description:
        "A large turtle Pokémon equipped with powerful water cannons on its shell.",
    },
    {
      id: 10,
      name: "Caterpie",
      image: "/images/img-10.png",
      type: ["Bug"],
      ability: "Shield Dust",
      height: "0.3 m",
      weight: "2.9 kg",
      category: "Worm Pokémon",
      mark: "#010",
      description:
        "A small, green caterpillar Pokémon that evolves into a cocoon before becoming a butterfly.",
    },
  ];
  

  const stats = [
    { name: "HP", value: 40 },
    { name: "Attack", value: 60 },
    { name: "Defense", value: 50 },
    { name: "Special Attack", value: 70 },
    { name: "Special Defense", value: 65 },
    { name: "Speed", value: 55 },
  ];

  const pokemon = pokemons.find((p) => p.id === Number(id));

  const allTypes = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
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

  const weaknesses = allTypes.filter((type) => !pokemon?.type.includes(type));

  if (!pokemon) {
    return <div className="text-center text-red-500 text-4xl my-12">Pokémon not found!</div>;
  }

  return (
    <div className="flex flex-col  items-center p-4 md:p-6">
      <div className="flex justify-center items-center my-5">
        <img
          src="/images/Logo.png"
          alt="Pokemon Logo"
          className="w-24 sm:w-32"
        />
      </div>

      <div className="lg:grid grid-cols-3 justify-items-center lg:mt-24">
      <div className="w-full max-w-xs sm:max-w-sm lg:order-2 ">
        <img src={pokemon.image} alt={pokemon.name} className="w-full" />
      </div>

      <div className="w-full text-center mt-5">
        <h1 className="text-[#257BC4] font-semibold text-lg sm:text-xl lg:order-1">
          {pokemon.name} <span>#00{pokemon.id}</span>
        </h1>
        <p className="text-sm">{pokemon.description}</p>

        <div className="border-[#FC7C23] border-4 rounded-lg w-full sm:w-[80%] rounded-br-[50px] grid grid-cols-2 gap-3 p-4 mt-5">
          <div>
            <p className="font-semibold">Height</p>
            <p>{pokemon.height}</p>
          </div>
          <div>
            <p className="font-semibold">Category</p>
            <p>{pokemon.category}</p>
          </div>
          <div>
            <p className="font-semibold">Weight</p>
            <p>{pokemon.weight}</p>
          </div>
          <div>
            <p className="font-semibold">Abilities</p>
            <p>{pokemon.ability}</p>
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-5 lg:order-3">
        <h1 className="font-semibold text-lg">Type</h1>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {pokemon.type.map((ability: string) => (
            <span
              key={`${pokemon.id}-${ability}`}
              className={`rounded-lg px-4 text-white font-semibold py-1 ${
                abilityColors[ability] || ""
              }`}
            >
              {ability}
            </span>
          ))}
        </div>

        <h1 className="font-semibold text-lg mt-5">Weaknesses</h1>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {weaknesses.slice(0, 4).map((ability: string) => (
            <span
              key={`${pokemon.id}-${ability}`}
              className={`rounded-lg px-4 text-white font-semibold py-1 ${
                abilityColors[ability] || ""
              }`}
            >
              {ability}
            </span>
          ))}
        </div>
        <div className="w-full max-w-sm mx-auto mt-5">
          <h2 className="text-lg font-bold">Stats</h2>
          {stats.map((stat, index) => (
            <div key={index} className="mb-3">
              <p className="text-sm font-medium">{stat.name}</p>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${stat.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <div>
        <Link to={"/"} className="bg-[#FFCB05] px-7 py-2 rounded-lg text-xl my-12 text-center text-white font-semibold felx items-center gap-4"><span>🏠 Go Back To HomePage</span></Link>
      </div>
    </div>
  );
}
