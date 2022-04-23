import {home, contacts} from "../content"
import CContact from "../src/contact";
import Footer from "../src/footer";
import Nav from "../src/nav";

const Contact = ({home, contacts}) =>{
    return <>
     <Nav home={home}/>
     <CContact contact={contacts}/>
     <Footer footer={home} />
    </>
}

export default Contact

export function getStaticProps(){
    return {
        props: {home,contacts}
    }
}