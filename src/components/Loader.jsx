import { loader } from "../assets";

const Loader = ({ title }) => (
  <div>
    <div className="w-full justify-center items-center flex-col">
      <img src={loader} alt="loeader" className="w-32 h-32 object-contain" />
      <h1 className="font-bold">{title || "Loading.."}</h1>
    </div>
  </div>
);

export default Loader;
