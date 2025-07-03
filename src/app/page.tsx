import AboutMe from "@/components/modules/Hero/AboutMe";
import Banner from "@/components/modules/Hero/Banner";
import Contact from "@/components/modules/Contact/Contact";
import Footer from "@/components/shared/Sections/Footer";
import Navbar from "@/components/shared/Sections/Navbar";
import SocialContact from "@/components/shared/Sections/SocialContact";
import MyBlogs from "./blogs/page";
import MyProjects from "./projects/page";
import Skills from "@/components/modules/Skills&Tools/Skills";
import Tools from "@/components/modules/Skills&Tools/Tools";

const Home = () => {
  return (
    <div className="max-w-screen-2xl md:mx-auto">
      <div className="lg:block hidden">
        <SocialContact />
      </div>
      <Navbar />
      <Banner />
      <div id="skills">
        <Skills />
      </div>
      <div id="tools">
        <Tools />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <MyProjects />
      </div>
      <div id="blogs">
        <MyBlogs />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;