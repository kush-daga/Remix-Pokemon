import { Link, useLoaderData } from 'remix';

export let loader = async () => {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon-species');
  return data;
};

export default function PokemonDefault() {
  const data = useLoaderData();
  // console.log(data.results);
  return (
    <div>
      POKEMON LIST: <br />
      {data.results.map((d: any) => (
        <Link to={d.name}>
          <li key={d.name}>{d.name}</li>
        </Link>
      ))}
    </div>
  );
}
