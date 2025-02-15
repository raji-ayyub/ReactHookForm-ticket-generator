// "use client";
// import { useState } from "react";
// import AvatarUpload from "@/components/AvatarUpload";

// export default function Home() {
//   const [avatar, setAvatar] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6">
//       <h1 className="text-2xl font-bold">Conference Ticket Generator</h1>
      
//       <AvatarUpload onUpload={(url) => setAvatar(url)} />

//       {avatar && (
//         <div className="mt-4 p-4 border rounded">
//           <p className="text-sm">Uploaded Avatar:</p>
//           <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full mt-2" />
//         </div>
//       )}
//     </div>
//   );
// }

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
