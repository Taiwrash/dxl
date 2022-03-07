const Expertise =({expert})=>{
    return <>
        <div className="bg-[#40435C] md:max-w-5xl  md:mx-auto ">
            <div>
                <div className="grid grid-gap-6 grid-cols-2 md:grid-cols-4 place-items-center py-10 md:py-4">
                    {expert.quality.map(item =>(
                        <div key={item.icon} className="flex flex-col p-6 py-10 justify-center items-center md:hover:bg-gradient-to-l from-[#7BC5A0] via-[#42929D] to-[#42929D] md:hover:w-[300px] md:hover:-translate-y-12">
                        <img src={item.icon} alt="quality service" className="h-40 bg-[#4c5070] rounded-full my-10"/>
                        <p className="text-white font-extrabold w-2/3 text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    
    </>
}

export default Expertise