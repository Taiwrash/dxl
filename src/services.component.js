import Button from "./button"

const SComponent = ({service}) =>{
    return <>
    <div>
        <div>
            <h2></h2>
            <div>
                <div className="grid grid-gap-4 grid-cols-1 md:grid-cols-3">
                    {service.services.map(item => (
                        <div className="bg-[#40435C] my-10 w-11/12 mx-auto max-w-lg p-6">
                            <img src={item.image} alt="services" className="w-full "/>
                            <div className=" mt-6">
                            <p className="text-4xl md:text-2xl text-gray-200">{item.text}</p>
                            <div className="flex justify-end mt-10"><Button>More Info</Button></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
}

export default SComponent