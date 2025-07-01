import AboutMe from "@/components/segments/AboutMe";
import Banner from "@/components/segments/Banner";
import Contact from "@/components/segments/Contact";
import Footer from "@/components/segments/Footer";
import MyBlogs from "@/components/segments/MyBlogs";
import MyProjects from "@/components/segments/MyProjects";
import Navbar from "@/components/segments/Navbar";
import Skills from "@/components/segments/Skills";
import Tools from "@/components/segments/Tools";
import SocialContact from "@/components/SocialContact";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <SocialContact />
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