import image6 from "../assets/image/image6.png";
const PsCard = () => {
  return (
    <div className="px-11 py-10">
      <div className="bg-black flex flex-col md:flex-row px-5 pt-6 justify-between">
        <div className="pl-10 text-white flex flex-col justify-center items-start gap-4 py-5">
          <div className="text-4xl">
            <p>PS 5 SONY DELIVERS TO YOU</p>
            <p>WITH A SPEED OF LIGHT</p>
          </div>
          <div>
            <p>Worldwide shopping, We ship to over 200</p>
            <p>countries right to your doorstep</p>
          </div>
          <button className="py-10 bg-orange-500 px-3 py-2 rounded-md">
            Order now
          </button>
        </div>
        <div className=""></div>
        <img src={image6} className="w-72 h-72 mr-20" alt="" />
      </div>
    </div>
  );
};

export default PsCard;
