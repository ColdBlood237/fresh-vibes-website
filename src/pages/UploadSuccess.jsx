import { Link } from "react-router-dom";

export default function UploadSuccess() {
  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Video caricato correttamente</h1>
          <p className="my-4">
            Puoi caricare più di un video prima della chiusura dei voti, ma solo
            il più recente verrà preso in considerazione.
          </p>
          <p className="mb-4">
            L'esito del voto vi verrà comunicato via email e sarà anche
            disponibile sul sito e i nostri socials, nel frattempo stay fresh
            🥶!
          </p>
          <Link to="/home">
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
