import { useQuery } from "@apollo/client";
import Card from "./Card/Card";
import { GET_ALL_POKEMONS } from "../../Apollo/queries";

// Define the interface for a single Pokemon
interface Pokemon {
  id: number;
  name: string;
  image: string; // Ensure this matches the field returned by your query
  artwork: string; // Ensure this is also part of the GraphQL query result
}

export default function Cards() {
  // Use the query to fetch data
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { limit: 10, offset: 0 },
  });

  // Show loading state while the data is being fetched
  if (loading) return <p className="text-center text-3xl my-12">Loading Pokémon...</p>

  // Show error if something goes wrong with the query
  if (error) return <p>Error: {error.message}</p>;

  // Extract the results from the data, with fallback to empty array if no data
  const pokemonS = data?.pokemons?.results || [];

  return (
    <div className="w-[90%] md:w-full mx-auto  px-4">
      {/* Carousel for mobile */}
      <div className="carousel carousel-center rounded-box max-w-md space-x-4 p-4 md:hidden">
        {pokemonS.map((pokemon: Pokemon) => (
          <div className="carousel-item" key={pokemon.id}>
            <Card pokemon={pokemon} />
          </div>
        ))}
      </div>

      {/* Grid for larger screens */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-12 hidden md:grid">
        {pokemonS.map((pokemon: Pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
