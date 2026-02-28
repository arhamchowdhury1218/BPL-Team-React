import { Suspense, use } from "react";
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
  return (
    <div>
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayers loadPlayers={loadPlayers}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}
    </div>
  );
}

export default App;
