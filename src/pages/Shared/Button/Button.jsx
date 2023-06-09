/* eslint-disable react/prop-types */


const Button = ({btnHeading}) => {
    return (
        
             <div>
            <button className='btn btn-outline border-0 border-l-4 border-sky-400 text-sky-400 hover:bg-sky-400 hover:border-cyan-400 hover:text-white font-cinzel'>{ btnHeading}</button>
        </div>
        
    );
};

export default Button;