import Card from "./Card";

import { useEffect, useState } from "react";

function Gameboard() {
  const [name, setName] = useState('');
  const [spriteUrl, setSpriteUrl] = useState('');

  useEffect(() => {
    async function getInfo(id) {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      const res = await fetch(url);
      const data = await res.json();

      console.log(data.name)
      console.log(data.sprites.front_default);
      setName(data.name);
      setSpriteUrl(data.sprites.front_default);
    }

    getInfo(6);
  }, []);

  return (
    <div className="gameboard">
      <Card name={name} spriteUrl={spriteUrl}/>
      <Card name={name} spriteUrl={spriteUrl}/>
      <Card name={name} spriteUrl={spriteUrl}/>
      <Card name={name} spriteUrl={spriteUrl}/>
      <Card name={name} spriteUrl={spriteUrl}/>
    </div>
  );
}

export default Gameboard;