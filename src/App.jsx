import { nanoid } from "nanoid";
import Upload from "./pages/Upload";
import Vote from "./pages/Vote";
import NoPage from "./pages/NoPage";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import VideoPresentation from "./components/VideoPresentation";
import Card from "./components/Card";
import Tuto from "./components/Tuto";
import disc from "./assets/disc.jpg";
import concert from "./assets/concert.jpg";
import travel from "./assets/travel2.jpg";
import studio from "./assets/studio.jpg";

function App() {
  const premi = [
    {
      title: "",
      text: "Sessioni in studio con un label partner !",
      img: studio,
    },
    {
      title: "",
      text: "Concerti dove sarai tu la star !! ",
      img: concert,
    },
    {
      title: "",
      text: "Tour per portare il tuo talento oltre ai mari !!!",
      img: travel,
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
        <div className="flex flex-col items-center md:flex-row md:justify-evenly md:justify md:px-4 gap-8 my-8">
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
      </div>
    </>
  );
}

export default App;
