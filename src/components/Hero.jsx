import logo from "../assets/logo.png";
import mic from "../assets/mic.jpg";
import singer from "../assets/singer.jpg";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen text-slate-50"
      style={{
        backgroundImage: `url(${singer})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={logo} className="max-w-sm h-150" />
        <div>
          <h1 className="text-5xl font-bold">PRESENTAZIONE</h1>
          <p className="py-6">
            Fresh Vibes è una celebrazione unica della diversità musicale! Uno
            spettacolare contest che offre a giovani talenti e artisti musicali
            tra i 18 e i 25 anni l'opportunità di mettersi in gioco con brani
            coinvolgenti e performance scenografiche. Non perdere la possibilità
            di essere parte di questo incredibile evento, segui e sostieni i
            talenti che si esibiranno ed immergiti nell'entusiasmo Fresh Vibes
            ora!!!
          </p>
          <button className="btn btn-primary mr-2 w-20">Upload</button>
          <button className="btn btn-primary w-20">Vote</button>
        </div>
      </div>
    </div>
  );
}
