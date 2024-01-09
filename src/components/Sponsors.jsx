import sponsor from "../assets/sponsor.png";
import biologika from "../assets/biologika.jpg";
import justBurger from "../assets/justBurger.jpg";
import pony from "../assets/pony.png";

export default function Sponsors() {
  return (
    <div className="carousel w-full justify-around my-4">
      <div className="avatar">
        <div className="w-16 md:w-20 rounded-full">
          <img src={biologika} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-16 md:w-20 rounded-full">
          <img src={justBurger} className="w-16 md:w-20 object-contain" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-16 md:w-20 rounded-full">
          <img src={pony} />
        </div>
      </div>
    </div>
  );
}
