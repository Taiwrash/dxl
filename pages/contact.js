import {home} from "../content"
import Footer from "../src/footer";
import Nav from "../src/nav";

const Contact = ({home}) =>{
    return <>
     <Nav home={home}/>
     <h1 className="h-96 text-7xl">Contact Page is coming soon</h1>
     <Footer footer={home} />
    </>
}

export default Contact

export function getStaticProps(){
    return {
        props: {home}
    }
}