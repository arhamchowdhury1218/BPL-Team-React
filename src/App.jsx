import { Suspense, use, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";

import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const response = await fetch("/players.json");
  const responseJson = response.json();
  return responseJson;
};
const loadPlayers = fetchPlayers();
function App() {
  const [toggle, setToggleState] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  const removeSelectedPlayers = (removedPlayer) => {
    console.log(removedPlayer);
    const newSelectedPlayer = purchasedPlayers.filter(
      (playerRemoved) => playerRemoved.id !== removedPlayer.id,
    );
    setPurchasedPlayers(newSelectedPlayer);
    setAvailableBalance(availableBalance + removedPlayer.price);
  };
  return (
    <div>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-full md:max-w-9/12 mx-auto my-10 p-3">
        <div className="flex justify-between items-center font-bold">
          <h1 className="text-xl md:text-2xl">
            {toggle === true
              ? "Available Players"
              : `Selected Player (${purchasedPlayers.length}/6)`}
          </h1>

          <div className="flex">
            <button
              onClick={() => setToggleState(true)}
              className={`btn border border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#e7fe29]" : ""} `}
            >
              Available
            </button>
            <button
              onClick={() => setToggleState(false)}
              className={`btn border border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#e7fe29]" : ""}`}
            >
              Selected <span>({purchasedPlayers.length})</span>
            </button>
          </div>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            loadPlayers={loadPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removeSelectedPlayers={removeSelectedPlayers}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
    </div>
  );
}

export default App;
