import {home} from "../content"
import {about} from "../content"
import CAbout from "../src/about";
import Footer from "../src/footer";
import Nav from "../src/nav";

const About = ({home, about}) =>{
    return <>
     <Nav home={home}/>
     <CAbout about={about} />
     <Footer footer={home} />
    </>
}

export default About

export function getStaticProps(){
    return {
        props: {home, about}
    }
}
