import { useState } from "react";
import Link from "next/link";
import Button from "./button";
// import {Menu} from "feather-icons";
import {XCircle, Menu} from "react-feather";

const Nav = ({home}) => {
    const [open, setOpen] = useState(false);
    return <>
        <div>
            <nav className="md:flex bg-white md:justify-between md:p-6 items-center shadow-lg">
                <div className="flex justify-between" >
                    <Link href="/">
                    <a className=" flex text-xl font-Gotham font-bold items-center">
                    <img src="/images/logo.svg" />
                    <span className="md:w-6/12 w-24 text-[#42929D] leading-5">DIGITAL XTRA LTD</span>
                    </a>
                    </Link>
                    <div className="p-6 md:hidden" onClick={()=>setOpen(!open)}>
                    {open ? <XCircle size="48" color="#42929D" /> : < Menu size="48" color="#42929D" />}  
                    </div>                
                </div>
                  <div>
                  <ul className={`z-10 md:flex md:justify-between md:w-full md:static absolute mt-4 text-center bg-[#40435C] w-full ${open ? "top-20" : "top-[-490px]"} md:bg-white md:justify-between transition-all duration-500 ease-in`}>
                      {home.navItems.map(nav=>(
                          <li key={nav.url} className="pt-8 pb-8 font-extrabold text-gray-400 hover:text-gray-100 md:pl-10 md:hover:text-[#42929D]">
                              <Link href={nav.url}>
                              <a>{nav.name}</a>
                              </Link>
                          </li>
                      ))}
                      <div className="md:flex md:items-center md:justify-center md:pl-10"><Button>DXL UK</Button></div>
                  </ul>
              </div>
            </nav>
        </div>
    
    </>;
}

export default Nav