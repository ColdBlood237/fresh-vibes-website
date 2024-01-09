import concert from "../assets/concert.gif";

export default function VideoPresentation() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={concert}
          alt="concert"
          className="max-w-md md:max-w-2xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Live Contest!</h1>
          <p className="py-6">
            Ecco cosa c'è in serbo per te, amante della musica e del
            divertimento! Oltre al grande premio, la top 10 più votata riceverà
            in regalo il biglietto per il favoloso evento Fresh Vibes Live
            Contest!
          </p>
        </div>
      </div>
    </div>
  );
}
