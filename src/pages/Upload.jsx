import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Upload() {
  const [videoLink, setVideoLink] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");

  function handleChange(event) {
    setVideoLink(event.target.value);
  }

  function previewVideo(event) {
    event.preventDefault();
    function getId(url) {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      return match && match[2].length === 11 ? match[2] : null;
    }

    const videoId = getId(videoLink);
    setIframeSrc("//www.youtube.com/embed/" + videoId);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16 lg:w-11/12">
        {/* <video controls className=" rounded-lg shadow-2xl">
          <source src={videoLink} type="video/mp4" />
        </video> */}
        <iframe
          className="w-full h-72 lg:w-7/12 lg:h-96"
          src={iframeSrc}
          //style={{ width: 600, height: 400 }}
          allowFullScreen
        />
        <div>
          <h1 className="text-5xl font-bold">Flexa il tuo talento!</h1>
          <p className="py-6"></p>

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
                className="input input-bordered w-full max-w-xs"
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
        </div>
      </div>
    </div>
  );
}

export default Upload;
