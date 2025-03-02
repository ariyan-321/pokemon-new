import Card from "./Card/Card";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  abilities: string[];
  mark: string;
}

export default function Cards() {
  const pokemons: Pokemon[] = [
    { id: 1, name: "Bulbasaur", image: "/images/img-1.png", abilities: ["Grass", "Poison"], mark: "#010" },
    { id: 2, name: "Ivysaur", image: "/images/img-2.png", abilities: ["Grass", "Poison"], mark: "#010" },
    { id: 3, name: "Venusaur", image: "/images/img-3.png", abilities: ["Grass", "Poison"], mark: "#010" },
    { id: 4, name: "Charmander", image: "/images/img-4.png", abilities: ["Fire"], mark: "#010" },
    { id: 5, name: "Charmeleon", image: "/images/img-5.png", abilities: ["Fire"], mark: "#010" },
    { id: 6, name: "Charizard", image: "/images/img-6.png", abilities: ["Fire", "Flying"], mark: "#010" },
    { id: 7, name: "Squirtle", image: "/images/img-7.png", abilities: ["Water"], mark: "#010" },
    { id: 8, name: "Wartortle", image: "/images/img-8.png", abilities: ["Water"], mark: "#010" },
    { id: 9, name: "Blastoise", image: "/images/img-9.png", abilities: ["Water"], mark: "#010" },
    { id: 10, name: "Caterpie", image: "/images/img-10.png", abilities: ["Bug"], mark: "#010" },
  ];

  return (
    <div className="w-[90%] md:w-full mx-auto">

      <div className="carousel  carousel-center rounded-box max-w-md space-x-4 p-4 md:hidden">
        {pokemons.map((pokemon) => (
          <div className="carousel-item " key={pokemon.id}>
            <Card pokemon={pokemon} />
          </div>
        ))}
      </div>

     
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-12  hidden md:grid">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
