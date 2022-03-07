const Footer =({footer})=>{
    return<>
    <footer className="">
    <div>
            <div className=" w-11/12 mx-auto bg-gradient-to-l from-[#7BC5A0] via-[#42929D] to-[#42929D] relative top-20 md:flex md:h-40 md:items-center md:justify-center md:p-5"> 
                <p className="hidden md:flex md:text-2xl text-gray-200 font-bold">{footer.contact.title}</p>
                {footer.contact.items.map(item=>(
                    <div key={item.text} className="flex flex-wrap  text-left pl-10">
                        <p className="w-10 h-10 rounded-full bg-[#40435C] flex items-center justify-center m-3"><img src={item.call} alt={item.text} className=" h-5" /></p>
                        <p className="text-xl text-gray-200 flex items-center font-bold justify-center font-[Gotham]">{item.text}</p>
                    </div>
                ))}
            </div>
        <div className="bg-[#40435C] p-12 text-white md:flex md:flex-row-reverse md:items-center md:justify-between ">
            <div className="mt-20 mb-10 grid gap-4 grid-cols-2 md:grid-cols-4">
            {footer.footer.navItems.map(nav=>(
                <div >
                    <p className="font-[Gotham]">{nav}</p>
                </div>
            ))}
        </div>
        <div className="flex md:flex-col mt-12">
            <div>
                {/* <img src={footer.header.logo} alt="social link" /> */}
                <h2 className="text-[#42929D] font-bold md:w-24">DIGITAL XTRA LTD</h2>
                <div className="flex mt-6">
                <img src={footer.footer.fb} alt="social link" />
                <img src={footer.footer.linkedin} alt="social link"  className="pl-10 "/>
                </div>
            </div>
            <div>
                <p className="pl-10 md:pl-0 md:mt-4">{footer.footer.title}</p>
            </div>
        </div>
    </div>
    </div>
    </footer>
    </>
}

export default Footer