import { useState, useEffect } from "react";

export default function App() {
  const [champion, setChampion] = useState("Amumu");

  function handleSearch(e) {
    setChampion(e);
    console.log(e);
  }

  return (
    <div className="container">
      <Nav onSearch={handleSearch} />
      <Box champion={champion} setChampion={setChampion} />
    </div>
  );
}

function Nav({ onSearch }) {
  return (
    <div className="nav">
      <Logo />
      <Search onSearch={onSearch} />
    </div>
  );
}

function Logo() {
  return <div className="logo">Logo</div>;
}

function Search({ onSearch }) {
  return (
    <div className="search-countainer">
      <input
        type="text"
        className="search-bar"
        placeholder="Champion name"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

function Box({ champion, setChampion }) {
  useEffect(function () {
    async function getChampions() {
      const res = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json`
      );
      const data = await res.json();
      console.log(data.data);
      setChampion(data.data);
    }
    getChampions();
  }, []);

  const { blurb, name, title } = champion.Aatrox;

  return (
    <div className="Box">
      <div className="img-container">
        <img src="../LoL-Patch-Notes-category.jpg" alt="champion-image" />
      </div>
      <div className="discription-container"></div>
      <div>Name : {name}</div>
      <p>Title : {title}</p>
      <p>Blurb : {blurb}</p>
    </div>
  );
}
