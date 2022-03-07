const Button =({children}) => {
    return (
        <button className="mb-20 md:mb-0  bg-gradient-to-l from-[#7BC5A0] via-[#42929D] to-[#42929D]  text-gray-100 font-bold hover:text-gray-200 p-3  pl-8 pr-8">
        {children}
        </button>
    );
    }

    export default Button;