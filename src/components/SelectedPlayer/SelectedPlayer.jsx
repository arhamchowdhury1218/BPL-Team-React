import React from "react";
import deleteIcon from "../../assets/Delete-icon.png";

const SelectedPlayer = ({ selectedPlayer, removeSelectedPlayers }) => {
  console.log(selectedPlayer);
  const { playerName, role, playerImage } = selectedPlayer;
  //   const handleRemovePlayer = () => {
  //     removeSelectedPlayers();
  //   };
  return (
    <div className="flex justify-between items-center mb-10 p-4 border border-gray-300 rounded-2xl">
      <div className="flex item-center gap-10">
        <img className="h-30 w-30 rounded-2xl" src={playerImage} alt="" />
        <div className="mt-3 md:mt-10">
          <h1 className="text-3xl font-bold">{playerName}</h1>
          <h4 className="text-2xl font-medium text-gray-600">{role}</h4>
        </div>
      </div>
      <button
        onClick={() => removeSelectedPlayers(selectedPlayer)}
        className="btn"
      >
        <img src={deleteIcon} alt="" />
      </button>
    </div>
  );
};

export default SelectedPlayer;
