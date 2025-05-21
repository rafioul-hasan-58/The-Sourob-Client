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
    <div className="">
      <SocialContact />
      <Navbar />
      <Banner />
      <Skills />
      <Tools />
      <AboutMe />
      <MyProjects />
      <MyBlogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;