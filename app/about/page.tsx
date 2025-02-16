import Navbar from "@/components/Navbar";
const AboutPage = () => {
 
  return (
    <div className='min-h-screen bg-[#02191D] flex flex-col text-white font-sans text-[14px]'>
        <Navbar />
        <div className="w-[80%]  mx-auto mt-8 items-center justify-center">
          <p>About Us</p>
        </div>
    </div>
  );
};

export default AboutPage;
