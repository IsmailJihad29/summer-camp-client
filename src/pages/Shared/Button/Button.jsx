/* eslint-disable react/prop-types */

const Button = ({ btnHeading, handleButton }) => {
  return (
    <div className="max-w-screen-xl mx-12 z-10">
      <button onClick={handleButton} className=" btn btn-outline border-0 border-l-4 border-sky-400 text-sky-400 hover:bg-sky-400 hover:border-cyan-400 hover:text-white font-cinzel font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      {btnHeading}
      </button>
        
          
    </div>
  );
};

export default Button;
