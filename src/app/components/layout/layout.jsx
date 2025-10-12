import Footer from "../footer/footer";

const { default: Header } = require("../header/header")

const Layout = ({children})=>{
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
export default Layout;