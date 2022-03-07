import Nav from "../src/nav";
import {home} from "../content"
import Footer from "../src/footer";
import Header from "../src/header";
import Expertise from "../src/expertise";
import SComponent from "../src/services.component";


const Hello = ({home}) => {
  return <>
    <Nav home={home} />
    <Header header={home} />
    <Expertise expert={home} />
    <SComponent service={home} />
    {/* ***Footer remain footer** */}
    <Footer footer={home}/>
   
   </>;
}

export default Hello
export function getStaticProps(){
    return {
        props: {home}
    }
}