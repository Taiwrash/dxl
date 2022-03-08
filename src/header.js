import { useState } from "react"
import Button from "../src/button"

const Header = ({header}) =>{
    const [more, setMore] = useState(false)
    const [text, setText] = useState("We are a technology company coming behind the world’s fastest payments processing network and payments firms. We are a vehicle for commerce and transaction...ATM, Mini ATM, P.O.S, Bitcoin;")
    const handleMore =()=>{
       const newMore = !more ? header.header.subtitle : header.header.subtitle.substr(0, 188)
       setText(newMore)
        setMore(!more) 
    }
  
    return <>
        <div>
        <div className="hero h-screen md:flex md:mt-10" >
            <div className="flex items-center justify-center text-center md:text-left flex-col text-white bg-[#40435C] h-full opacity-40 md:opacity-100 md:w-1/2 md:bg-[#EEEBEB]">
                <h1 className="text-4xl p-4 text-center w-10/12 font-bold max-w-xl md:text-[#000000] md:text-left">{header.header.title}</h1>
                <p className="text-center text-white px-10 md:pl-12 md:px-0 text-lg md:text-[#646975] md:text-left md:w-full">{text}</p>
                <a onClick={handleMore} className="text-[#00D1FF] md:mb-10" >Read {more ? "Less" : "More"}  </a>

            </div>
            <div className=" hidden md:flex md:items-left  md:w-full md:justify-end">
                <img src={header.header.heroImage} alt="hero" className="" />
            </div>
        </div>
        <div className="bg-white w-11/12 md:w-10/12 md:right-40 md:ml-60 mx-auto shadow-lg relative bottom-[100px] pt-20 p-10">
            <h3 className="text-2xl mb-6 text-[#42929D]">Book Your Consultation Now</h3>
            <form className="grid gap-4 grid-cols-2 place-content-center md:grid-cols-4">
                <div className="mb-6 ">
                <label className="text-gray-400 font-semibold">Location </label> <br/> 
                <select>
                    <option value="Lagos, Nigeria" className="text-black">Lagos, Nigeria</option>
                </select>
                </div>
             
                <div>
                <label className="text-gray-400 font-semibold">Services  </label> <br/>
                <select>
                    <option value="Crypto">Crypto Currency</option>
                </select>
                </div>
                <div>
                <label className="text-gray-400 font-semibold">Date  </label> <br/>
                <select>
                    <option className="text-2xl" value="date">Wed, Oct 13, 2021</option>
                </select>
                </div>
               <div className="pl-8">
                   <Button>Book Now</Button>
                </div>
                
            </form>
        </div>
        </div>
    </>
}

export default Header