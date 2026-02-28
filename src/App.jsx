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
function App() {
  const loadPlayers = fetchPlayers();
  const [toggle, setToggleState] = useState(true);
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-full md:max-w-9/12 mx-auto my-10 p-3">
        <div className="flex justify-between items-center font-bold">
          <h1 className="text-xl md:text-2xl">Available Players</h1>

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
              Selected <span>(0)</span>
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
          <AvailablePlayers loadPlayers={loadPlayers}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
}

export default App;
