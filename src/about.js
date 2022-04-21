import Button from "./button";

const CAbout = ({about}) => {
    return <>
        <div>
            <div className="pt-32">
                <div className="bg-[#40435C] py-12 px-2 flex flex-col justify-center items-center text-white p-32 ">
                    <h1 className="text-5xl w-11/12 text-center mb-10">{about.header.title}</h1>
                    <p className="text-6 w-11/12 text-center font-bold">{about.header.subtitle}</p>
                </div>
                <div className="w-full">
                    <img className="object-contain" src={about.header.image} alt="about header" />
                </div>
            </div>
            <div className="flex bg-white w-11/12 mx-auto relative bottom-40 py-16 px-6 h-fit sm:static sm:mt-36">
                <div className="w-2/4">
                    <h1 className="text-lg font-extrabold md:text-4xl">{about.leaders.title}</h1>
                    <p className="text-xm text-left w-full py-4 sm:w-3/4">{about.leaders.subtitle}</p>
                    <button className="mb-20 md:mb-0  bg-gradient-to-l from-[#7BC5A0] via-[#42929D] to-[#42929D]  text-gray-100 font-bold w-3/4 md:w-2/3 text-xs hover:text-gray-200 p-3  text-center px-8 md:px-8">
                    {about.leaders.cta}
                     </button>
                </div>
                <div>
                    <div className="flex pl-6 flex-wrap
                ">
                        {about.leaders.leads.map(item=>(
                            <div key={item.img} className="w-2/4 pl-4">
                                <img src={item.img} alt={item.name} className="w-full"/>
                                <div className="bg-[#42929D] py-4 px-2 text-white w-full flex pl-2 md:justify-between md:p-8">
                                    <div>
                                    <p className="text-xs font-bold leading-4 font-Gotham">{item.name}</p>
                                    <p className="text-xs">{item.position}</p>
                                    </div>
                                    <div className=" mt-4"><img className="h-4" src="/images/linkedin.svg" /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    
    </>
}

export default CAbout