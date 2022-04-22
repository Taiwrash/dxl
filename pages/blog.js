import {home} from "../content"
import {blogs} from "../content"
import CBlog from "../src/blog";
import Footer from "../src/footer";
import Nav from "../src/nav";

const Blog = ({home, blogs}) =>{
    return <>
     <Nav home={home}/>
     <CBlog blog={blogs} />
     <Footer footer={home} />
    </>
}

export default Blog

export function getStaticProps(){
    return {
        props: {home, blogs}
    }
}
