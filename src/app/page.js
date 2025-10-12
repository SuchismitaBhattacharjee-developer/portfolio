
import Layout from "./components/layout/layout";
import Banner from "./banner/banner";
import About from "./about/about";
import Skill from "./skill/skill";
import Education from "./education/education";
import Experience from "./experience/experience";
import Workprocess from "./workprocess/workprocess";
import PortfolioSection from "./portfolio/portfolio";
import Contact from "./contact/contact";


export default function Home() {
  return(
    <Layout>
      <Banner/>
      <About/>
      <Skill/>
      <Education/>
      <Experience/>
      <Workprocess/>
      <PortfolioSection/>
      <Contact/>
    </Layout>
  )
}