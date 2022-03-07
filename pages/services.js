import Nav from "../src/nav"
import {home} from "../content"
import Footer from "../src/footer"

const Services = ({home}) =>{
    return <div className="flex flex-col h-screen justify-between">
    <Nav home={home}/>
    <h1 className="h-96 text-7xl">Services Page is coming soon</h1>
    <Footer footer={home} />
    </div>
    
}

export default Services
export function getStaticProps(){
    return {
        props: {home}
    }
}