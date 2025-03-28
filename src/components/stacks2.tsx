import linkedindiv from "../assets/linkedindiv.svg";
import curriculo from "../assets/curriculo.svg";

const Stacks2 = () => {
  return (
    <div className="flex justify-center h-screen w-full bg-blue">
      <div className="flex justify-center items-center gap-6 mt-0">
        <img src={linkedindiv} alt="" className="w-20 sm:w-64" />
        <img src={curriculo} alt="" className="w-20 sm:w-64" />
      </div>
    </div>
  );
};

export default Stacks2;
