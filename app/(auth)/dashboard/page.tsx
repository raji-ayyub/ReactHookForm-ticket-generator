import Navbar from "@/components/Navbar";

const Dashboard = () => {
 
    return (
    <div className='min-h-screen bg-[#02191D] flex flex-col text-white font-sans text-[14px]'>
        <Navbar />
        <div className="w-[80%] mt-8 mx-auto h-12 items-center justify-center">
          Tickets Dashboard
        </div>
    </div>
    );
  };
  
  export default Dashboard;