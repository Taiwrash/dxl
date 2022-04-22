import Button from "./button"

const CContact = ({contact}) => {
    return<>
        <div className="flex items-center justify-center py-32 h-3/4">
            <div className="flex w-11/12 h-5/6 md:flex-row flex-col bg-slate-600 md:pl-24 md:pb-24 mb-32 mt-32 ">
                <div className="w-full md:w-1/2 pt-32 pl-4">
                    <h2 className="text-4xl font-sans text-gray-200 pb-6">{contact.header.title}</h2>
                    <p className="text-3xl font-sans text-gray-200 pb-6">{contact.header.subtitle}</p>
                    <Button>{contact.header.cta}</Button>
                </div>
                <div className="w-full md:w-1/2 py-12  h-full">
                    <div className="md:p-12 h-full p-4" >
                        <img src={contact.address.img} alt={contact.address.location} className="w-full h-2/3"/>
                        <div className=" flex w-full bg-gray-200 h-1/3">
                            <div className="w-1/2 p-6">
                                <h3 className="text-3xl text-green-700  font-sans pb-6">{contact.address.location}</h3>
                                <p  className="text-sm font-sans pb-6">{contact.address.fullAddress}</p>
                            </div>
                            <div className="w-1/2">
                                <div className="bg-slate-50 border-4 border-black h-12 rounded-md mr-6 flex mt-12 justify-center items-center p-6">
                                    {/* <img src={contact.address.phoneIcon} alt={contact.address.phone} className="w-8 h-8 rounded bg-slate-600 p-4" /> */}
                                    <p className="text-sm font-sans hidden lg:block">{contact.address.phone}</p>
                                </div>
                                <div className="bg-slate-50 border-4 border-black h-12 rounded-md mr-6 flex mt-4 justify-center items-center p-6">
                                    {/* <img src={contact.address.mailIcon} alt={contact.address.mail} /> */}
                                    <p className="text-sm font-sans hidden lg:block">{contact.address.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CContact