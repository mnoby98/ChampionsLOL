import { useState, useEffect } from "react";
import { ChamptionDataa } from "./ChampionDataa";

function Champion({ champion }) {
  const [showButton, setShowButton] = useState(true);
  const [championData, setChampionData] = useState([]);

  useEffect(
    function () {
      async function getInfoChampion() {
        const res = await fetch(
          `http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion/${champion.id}.json`
        );
        const data = await res.json();
        console.log(data.data);
        setChampionData(Object.values(data.data)[0]);
      }
      getInfoChampion();
    },
    [champion.id]
  );

  return (
    <div className="discription-box">
      <ChamptionDataa
        champion={champion}
        championData={championData}
        showButton={showButton}
      />
      <button
        className="btn-show-more"
        onClick={() => setShowButton((show) => !show)}>
        {showButton ? "Show more" : "Show less"}
      </button>
    </div>
  );
}

export default Champion;
