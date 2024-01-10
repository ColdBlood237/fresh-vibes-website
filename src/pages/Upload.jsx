import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Upload() {
  const [videoLink, setVideoLink] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");
  const [showFrame, setShowFrame] = useState(false);
  const [videoNotFound, setVideoNotFound] = useState(false);
  const navigate = useNavigate();

  function getId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  function handleChange(event) {
    setVideoLink(event.target.value);
  }

  function previewVideo(event) {
    event.preventDefault();

    const videoId = getId(videoLink);
    if (videoId !== null) {
      setShowFrame(true);
      setVideoNotFound(false);
    } else {
      setShowFrame(false);
      setVideoNotFound(true);
    }
    setIframeSrc("//www.youtube.com/embed/" + videoId);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const videoId = getId(videoLink);
    if (videoId !== null) {
      navigate("/upload/success");
      setVideoNotFound(false);
    } else {
      setShowFrame(false);
      setVideoNotFound(true);
    }
  }

  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16 lg:w-11/12">
        {/* <video controls className=" rounded-lg shadow-2xl">
          <source src={videoLink} type="video/mp4" />
        </video> */}

        {showFrame && (
          <iframe
            className="w-full h-72 lg:w-7/12 lg:h-96"
            src={iframeSrc}
            //style={{ width: 600, height: 400 }}
            allowFullScreen
          />
        )}
        <div>
          <h1 className="text-5xl font-bold">Flexa il tuo talento!</h1>
          <p className="py-6">
            Carica la tua performance musicale per far parte contest!
          </p>

          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col items-start gap-2"
          >
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Link YouTube:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-96"
                value={videoLink}
                onChange={handleChange}
              />
            </label>
            <div>
              <button type="submit" className="btn">
                Invia
              </button>
              <button type="button" onClick={previewVideo} className="btn">
                Preview
              </button>
            </div>
          </form>
          {videoNotFound && (
            <div role="alert" className="alert alert-error mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Video YouTube non trovato, verifica la correttezza del link!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upload;
