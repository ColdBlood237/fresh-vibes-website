export default function Card({ img, title, text }) {
  return (
    <div className="card w-8/12 md:w-72 lg:w-96 bg-base-100 shadow-xl ">
      <figure className="h-40">
        <img src={img} alt={title} className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
