import Nav from "../src/nav"
import {services} from '../content'
import {home} from "../content"
import Footer from "../src/footer"
import CServices from "../src/services"

const Services = ({home, services}) =>{
    return <div className="flex flex-col h-screen justify-between">
    <Nav home={home}/>
    <CServices services={services} />
    <Footer footer={home} />
    </div>
    
}

export default Services
export function getStaticProps(){
    return {
        props: {home,  services}
    }
}