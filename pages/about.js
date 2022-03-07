import {home} from "../content"
import Footer from "../src/footer";
import Nav from "../src/nav";

const About = ({home}) =>{
    return <>
     <Nav home={home}/>
     <h1 className="h-96 text-7xl">About Page is coming soon</h1>
     <Footer footer={home} />
    </>
}

export default About

export function getStaticProps(){
    return {
        props: {home}
    }
}