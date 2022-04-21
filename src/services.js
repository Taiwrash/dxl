
const CServices = ({services}) => {
    console.log(services);
    return <>
    <div>
    <div>
        <div className="bg-[#40435C] py-12 px-2 flex flex-col justify-center items-center text-white mt-32">
            <h1 className="text-5xl w-11/12 text-center mb-10">{ services.header.title}</h1>
            <p className="text-6 w-11/12 text-center font-bold">{ services.header.subtitle}</p>
        </div>
        <div className="w-full">
            {/* <img className="object-contain" src={services.header.image} alt="services header" /> */}
        </div>
    </div>
        <div className="mt-32 ">
            {
            services.service.map(services=>(
                <div className="card flex md:m-12 max-w-full md:mt-32">
                <div className="md:w-1/2  md:m-10 h-3/4 md:pl-12 md:pb-12 bg-gradient-to-l from-[#7BC5A0] via-[#42929D] to-[#42929D]">
                    <div className="img-bg ">
                        <img src={services.img} alt={services.title} className="relative md:h-80 bottom-2 left-2 md:w-full" />
                    </div>
                </div>
                <div className="md:w-1/2 md:m-10 service-contents ">
                    <h2 className="font-extrabold text-3xl md:mb-4 font-sans">{services.title}</h2>
                    <p className="text-lg font-serif font-bold text-gray-500">{services.subtitle}</p>
                </div>
            </div>
            ))
            }
            
        </div>
    </div>
    </>
}

export default CServices