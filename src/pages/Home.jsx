import { nanoid } from "nanoid";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import VideoPresentation from "../components/VideoPresentation";
import Card from "../components/Card";
import Tuto from "../components/Tuto";
import Footer from "../components/Footer";
import travel from "../assets/travel2.jpg";
import studio from "../assets/studio.jpg";
import cubo from "../assets/cubo.jpg";
import mike from "../assets/mike.jpg";
import melodia from "../assets/melodia.jpg";
import morgano from "../assets/morgano.jpg";
import money from "../assets/money.jpg";
import GuestStars from "../components/GuestStars";

function Home() {
  const premi = [
    {
      title: "🎙️ ETICHETTA MUSICALE",
      text: "Il vincitore di questo straordinario evento avrà l'opportunità unica di ottenere un contratto discografico esclusivo con la rinomata etichetta discografica Pony Records!",
      img: studio,
    },
    {
      title: "💰 CASH",
      text: "Parliamo di ben 100.000 euro all'artista vincitore!!! Simbolo di riconoscimento dell'industria musicale, che ti propulseranno verso nuovi orizzonti nel panorama globale.",
      img: money,
    },
    {
      title: "🛫 TOUR",
      text: "La possibilità di fare un tour indimenticabile in Europa, portando la propria musica a nuovi livelli!",
      img: travel,
    },
  ];

  const judges = [
    {
      title: "🌟 MORGANO",
      text: "Un'icona dell'innovazione musicale, pronto a esplorare nuovi suoni e guidare i talenti verso nuovi orizzonti creativi!",
      img: morgano,
    },
    {
      title: "🎵 MELODIA",
      text: "Un'artista eclettica diventata giudice per scoprire il prossimo aspirante protagonista della scena musicale, portando varietà e carisma alle valutazioni del contest!",
      img: melodia,
    },
    {
      title: "🔥 MIKE",
      text: "Emblema dell'originalità nel giudicare l'eccellenza, trasmette entusiasmo e ricerca di qualità uniche in ogni esibizione!",
      img: mike,
    },
    {
      title: "🚀 CUBO EBBASTA",
      text: "Simbolo di modernità e freschezza nella giuria musicale, pronto a valutare con uno sguardo innovativo e contemporaneo, cercando l'audacia e lo stile in ogni partecipante!",
      img: cubo,
    },
  ];

  return (
    <>
      <NavBar />
      <div>
        <Hero />
        <Sponsors />
        <VideoPresentation />
        <h2 className="text-center text-5xl font-bold mt-4">PREMI</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-evenly md:justify md:px-4 md:items-start gap-8 my-8">
          {premi.map((premio) => (
            <Card
              key={nanoid()}
              img={premio.img}
              title={premio.title}
              text={premio.text}
            />
          ))}
        </div>
        <Tuto />
        <GuestStars />
        <div className="bg-base-200 mt-8 pt-8">
          <h2 className="text-center text-5xl font-bold">COMMISSIONE</h2>
          <div className="flex flex-col items-center md:grid md:grid-cols-2 md:mx-auto md:justify-items-center md:items-start lg:flex lg:flex-row lg:justify-evenly lg:justify lg:px-4 gap-8 py-8">
            {judges.map((judge) => (
              <Card
                key={nanoid()}
                img={judge.img}
                title={judge.title}
                text={judge.text}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
