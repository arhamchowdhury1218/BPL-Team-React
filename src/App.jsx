import "./App.css";
import logoImg from "./assets/logo.png";
import currencyLogo from "./assets/Currency-logo.png";

function App() {
  return (
    <div className="max-w-9/12 mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <img className="w-15 h-15" src={logoImg} alt="" />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold">6000000000</span>
          <span className="font-semibold">Coin</span>
          <img className="w-5 h-5" src={currencyLogo} alt="Currency Logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
