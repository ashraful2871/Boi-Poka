import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 p-10 mt-5 border-2 border-red-600 mb-5 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mb-12">
            Books to freshen up <br />
            your bookshelf
          </h1>

          <div className="text-center lg:text-start">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
