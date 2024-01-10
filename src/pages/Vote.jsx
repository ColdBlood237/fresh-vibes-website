import { nanoid } from "nanoid";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";

function Vote() {
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const artistNames = [
    "Lila Moonbeam",
    "Jasper Wilder",
    "Elara Starlight",
    "Orion Blaze",
    "Seraphina Sky",
    "Zephyr Nightshade",
    "Celeste Dreamweaver",
    "Phoenix Ember",
    "Luna Silverleaf",
    "Orion Midnight",
  ];

  const artistsCheckboxes = artistNames.map((name) => (
    <label key={nanoid()} className="label cursor-pointe gap-3">
      <input
        type="checkbox"
        value={name}
        checked={checkedBoxes.includes(name)}
        onChange={() => handleCheckboxChange(name)}
        className="checkbox-primary checkbox"
      />
      <span className="label-text w-80">{name}</span>
    </label>
  ));

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCheckboxChange(value) {
    if (checkedBoxes.includes(value)) {
      setCheckedBoxes(checkedBoxes.filter((item) => item !== value));
    } else if (checkedBoxes.length < 5) {
      setCheckedBoxes([...checkedBoxes, value]);
    }
  }

  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Vota i tuoi talenti preferiti!</h1>
          <p className="py-6">
            Puoi votare fino a 5 artisti, ma una volta premuto il tasto invio
            non si torna più indietro.
          </p>
          <div role="alert" className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Le votazioni non sono ancora aperte.</span>
          </div>
        </div>
        {/* <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */}
        <form onSubmit={handleSubmit} id="vote-form" className="card-body">
          <div className="grid grid-cols-2 gap-2">{artistsCheckboxes}</div>
          <div className="form-control mt-6">
            <button disabled className="btn btn-primary w-28">
              Invia
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Vote;
