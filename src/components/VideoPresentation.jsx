import video from "../assets/dummyvid.mp4";
import finale from "../assets/serataFinale.mp4";

export default function VideoPresentation() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <video
          className="max-w-md md:max-w-2xl rounded-lg shadow-2xl"
          src={video}
          controls="controls autoplay"
          type="video/webm"
        ></video>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}
