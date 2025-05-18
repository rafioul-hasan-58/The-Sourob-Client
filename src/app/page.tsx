import Banner from "@/components/segments/Banner";
import Contact from "@/components/segments/Contact";
import Navbar from "@/components/segments/Navbar";
import Skills from "@/components/segments/Skills";
import SocialContact from "@/components/SocialContact";

const Home = () => {
  return (
    <div className="">
      <SocialContact />
      <Navbar />
      <Banner />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;