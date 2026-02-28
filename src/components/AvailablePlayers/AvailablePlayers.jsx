import React, { use } from "react";

import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({
  loadPlayers,
  setAvailableBalance,
  availableBalance,
}) => {
  const players = use(loadPlayers);
  console.log(players);
  return (
    <div className="max-w-full lg:max-w-9/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {players.map((player) => (
          <AvailablePlayer
            key={player.id}
            player={player}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
          ></AvailablePlayer>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
