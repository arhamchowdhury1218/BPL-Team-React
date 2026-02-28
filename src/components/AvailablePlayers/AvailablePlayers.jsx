import React, { use } from "react";

import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({
  loadPlayers,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const players = use(loadPlayers);

  return (
    <div className="max-w-full lg:max-w-9/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {players.map((player) => (
          <AvailablePlayer
            key={player.id}
            player={player}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayer>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
