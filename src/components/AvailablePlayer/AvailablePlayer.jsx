import playerIcon from "../../assets/player-icon.png";
import flagIcon from "../../assets/flag-icon.png";
const AvailablePlayer = ({ player }) => {
  console.log(player);
  const {
    id,
    battingStyle,
    bowlingStyle,
    country,
    playerImage,
    playerName,
    price,
    rating,
    role,
  } = player;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm p-4">
        <figure>
          <img
            className="w-full h-75 object-cover"
            src={playerImage}
            alt="Player Image"
          />
        </figure>
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <img className="w-5 h-5" src={playerIcon} alt="" />
            <h2 className="card-title">{playerName}</h2>
          </div>

          <div className="flex justify-between items-center gap-1.5 mt-4 border-b border-gray-300 pb-2">
            <div className="flex gap-1 items-center">
              <img className="w-4 h-4" src={flagIcon} alt="" />
              <h1>{country}</h1>
            </div>
            <button className="btn">{role}</button>
          </div>

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-black font-semibold">Rating</h2>
            <h2 className="text-gray-700 font-medium">{rating}</h2>
          </div>

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-black font-semibold">{battingStyle}</h2>
            <h2 className="text-black font-semibold">{bowlingStyle}</h2>
          </div>

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-black font-semibold">Price: ${price}</h2>
            <button className="btn btn-primary">Choose Player</button>
          </div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
