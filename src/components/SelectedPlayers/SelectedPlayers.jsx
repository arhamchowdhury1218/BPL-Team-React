import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ purchasedPlayers, removeSelectedPlayers }) => {
  console.log(purchasedPlayers);
  return (
    <div className="max-w-full md:w-9/12 mx-auto">
      {/* <h1>purchasedPlayers:{purchasedPlayers.length}</h1> */}
      {purchasedPlayers.map((selectedPlayer) => (
        <SelectedPlayer
          key={selectedPlayer.id}
          selectedPlayer={selectedPlayer}
          removeSelectedPlayers={removeSelectedPlayers}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
