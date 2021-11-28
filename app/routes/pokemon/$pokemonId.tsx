import { LoaderFunction, useLoaderData } from 'remix';

export let loader: LoaderFunction = async ({ params }) => {
  const link = `https://pokeapi.co/api/v2/pokemon-species/${params.pokemonId}`;
  const data = await fetch(link);
  return data;
};

export default function PokemonDefault() {
  const data = useLoaderData();
  // console.log('Data:', data);
  return (
    <div>
      POKEMON Details
      <br />
      <div>Name: {data.name}</div>
      <div>Is Legendary: {data.is_legendary ? 'YEs' : 'No'} </div>
    </div>
  );
}
