
import MultistepForm from '@/components/MultistepForm'
import Navbar from '@/components/Navbar';

const TicketGenerator = () => {
 
  return (
    <div className='min-h-screen bg-[#02191D] flex flex-col font-sans text-[14px]'>
      <Navbar />
      <MultistepForm />
    </div>
  );
};

export default TicketGenerator;
