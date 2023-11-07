import { useState } from "react";

export function ChamptionDataa({ champion, championData, showButton }) {
  return (
    <div>
      <div className="image-container">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/champion/${champion.image.full}`}
        />
      </div>
      <div className="champion-container">
        <p className="champion-name">{championData.name}</p>
        <p className="champion-title">{championData.title}</p>
        <p> Legacy : {championData.tags}</p>

        {showButton ? (
          ""
        ) : (
          <>
            <div>
              <p> Partype : {championData.partype}</p>
              <p>Blurb : {championData.blurb}</p>
            </div>
            <Stats championData={championData} />
          </>
        )}
      </div>
    </div>
  );
}

function Stats({ championData }) {
  const [level, setLevel] = useState(0);
  return (
    <div className="stats">
      <p className="champion-Base-statistics">
        Base statistics
        <span className="level-options">
          level :
          <select
            className="stats-options"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            {Array.from({ length: 18 }, (_, i) => i + 1).map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
        </span>
      </p>
      <p>
        Armor :{" "}
        {(
          championData.stats.armor +
          Number(level * championData.stats.armorperlevel)
        ).toPrecision(3)}
      </p>
      <p>
        attackdamage :{" "}
        {(
          championData.stats.attackdamage +
          Number(level * championData.stats.attackdamageperlevel)
        ).toPrecision(3)}
      </p>
      <p>attackrange : {championData.stats.attackrange}</p>
      <p>
        attackspeed :
        {(
          championData.stats.attackspeed +
          Number(level * championData.stats.attackspeedperlevel)
        ).toPrecision(3)}
      </p>
      <p>
        crit :{" "}
        {(
          championData.stats.crit +
          Number(level * championData.stats.critperlevel)
        ).toPrecision(3)}
      </p>
      <p>movespeed : {championData.stats.movespeed}</p>
      <p>
        hp :{" "}
        {(
          championData.stats.hp + Number(level * championData.stats.hpperlevel)
        ).toPrecision(3)}
      </p>
      <p>
        mp :{" "}
        {(
          championData.stats.mp + Number(level * championData.stats.mpperlevel)
        ).toPrecision(3)}
      </p>
      <p>
        mpregen :{" "}
        {(
          championData.stats.mpregen +
          Number(level * championData.stats.mpregenperlevel)
        ).toPrecision(3)}
      </p>
      <p>
        spellblock :{" "}
        {(
          championData.stats.spellblock +
          Number(level * championData.stats.spellblockperlevel)
        ).toPrecision(3)}
      </p>
    </div>
  );
}
