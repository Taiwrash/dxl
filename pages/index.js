import Nav from "../src/nav";
import {home} from "../content"
import Footer from "../src/footer";
import Header from "../src/header";
import Expertise from "../src/expertise";
import SComponent from "../src/services.component";


const Hello = ({home}) => {
  return <div className="w-full">
    <Nav home={home} />
    <Header header={home} />
    <Expertise expert={home} />
    <SComponent service={home} />
    {/* ***Footer remain footer** */}
    <Footer footer={home}/>
   
   </div>;
}

export default Hello
export function getStaticProps(){
    return {
        props: {home}
    }
}