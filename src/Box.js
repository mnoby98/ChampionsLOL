import { useEffect, useState } from "react";
import Champion from "./Champion";

export default function Box({ search }) {
  const [champions, setChampions] = useState([]);

  useEffect(function () {
    async function getChampions() {
      const res = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json`
      );
      const data = await res.json();
      setChampions(Object.values(data.data));
    }
    getChampions();
  }, []);



  return (
    <div className="Box">
      <div className="discreption-container">
        {champions.map((champion) => (
          <Champion champion={champion} key={champion.key} />
        ))}
      </div>
    </div>
  );
}
