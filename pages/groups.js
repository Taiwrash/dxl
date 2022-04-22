import {home} from "../content"
import {groups} from "../content"
import CGroups from "../src/groups";
import Footer from "../src/footer";
import Nav from "../src/nav";

const Blog = ({home, groups}) =>{
    return <>
     <Nav home={home}/>
     <CGroups group={groups} />
     <Footer footer={home} />
    </>
}

export default Blog

export function getStaticProps(){
    return {
        props: {home, groups}
    }
}
