
// import { Controller } from 'react-hook-form';

// const TicketSelection = () => {



//     return (
      
      
//         <div className=" w-full mx-auto shadow-lg text-white w-full max-w-md ">
          
//           <div className="h-[243px]  overflow-hidden rounded-[12px] border border-[#197686]" >
//             <div className="bg-gradient h-[243px] px-[12px] rounded-[12px] flex flex-col justify-between items-center">
              

//               <div className=" mt-[16px] min-h-[119px] text-center h-[119px] space-y-[8px]">

//                 <h2 className="text-[26px] w-full  font-display mb-4">{`Techember Fest"25`}</h2>
                
//                 <p className=" px-[12px]">
//                   Join us for an unforgettable experience at [Event Name]! Secure your spot now.
//                 </p>

//               </div>

//               <div className=" mb-[16px] text-center">
//                 <p className="h-[24px] ">📍 [Event Location]</p>
//                 <p className="h-[24px] ">March 15, 2025 | 7:00 PM</p>

//               </div>



    
//             </div>
            
//           </div>

//           <div className="bg-[#07373F] h-[4px] my-[24px] "></div>


//           <div className="flex flex-col gap-[8px]">
//             <label className="">Select Ticket Type: </label>

//             <div className="flex flex-col space-y-[16px] h-[275px] p-[16px] bg-dark border border-[#07373F] rounded-[24px] ">

//               <div className="flex w-[242px] h-[65px] hover:bg-[#197686] p-[8px] gap-[8px] justify-between rounded-[12px] border border-[#07373F] hover:border-[#197686] ">
//                 <div className="flex flex-col gap-[4px] h-[49px]  ">
//                   <p className="text-16px">REGULAR ACCESS</p>
//                   <p>20 left!</p>
//                 </div>

//                 <div className="flex w-[80px] h-[38px] p-[8px] border border-[#2BA4B9] rounded-[8px] bg-[#0E464F] ">
//                   <p className="text-[20px] ml-auto">Free</p>
//                 </div>
//               </div>

//               <div className="flex w-[242px] h-[65px] hover:bg-[#197686] p-[8px] gap-[8px] justify-between rounded-[12px] border border-[#07373F] hover:border-[#197686] ">
//                 <div className="flex flex-col gap-[4px] h-[49px]  ">
//                   <p className="text-16px">VIP ACCESS</p>
//                   <p>20 left!</p>
//                 </div>

//                 <div className="flex w-[80px] h-[38px] p-[8px] border border-[#2BA4B9] rounded-[8px] bg-[#0E464F] ">
//                   <p className="text-[20px] ml-auto">$50</p>
//                 </div>
//               </div>

//               <div className="flex w-[242px] h-[65px] hover:bg-[#197686] p-[8px] gap-[8px] justify-between rounded-[12px] border border-[#07373F] hover:border-[#197686] ">
//                 <div className="flex flex-col gap-[4px] h-[49px]  ">
//                   <p className="text-16px">VVIP ACCESS</p>
//                   <p>20 left!</p>
//                 </div>

//                 <div className="flex w-[80px] h-[38px] p-[8px] border border-[#2BA4B9] rounded-[8px] bg-[#0E464F] ">
//                   <p className="text-[20px] ml-auto">$150</p>
//                 </div>
//               </div>

//             </div>

//           </div>


//           <div className="h-[80px] flex flex-col my-[24px] gap-[8px] ">

//             <label className="block text-sm font-medium">Number of Tickets</label>
            
//             <input
//               type="number"
//               className="w-full p-2 h-[48px] bg-transparent  focus:ring-2 focus:ring-[#197686]-500 rounded-[12px] border border-[#07373F]"
//               min="1"
//             />
//           </div>
    
//         </div>
    
//     );
//   };
  
//   export default TicketSelection;
  

import { Controller } from 'react-hook-form';

const TicketSelection = ({ control, errors }) => {
  return (
    <div className="w-full mx-auto shadow-lg text-white max-w-md">
      {/* Event Banner */}
      <div className="h-[243px] overflow-hidden rounded-[12px] border border-[#197686]">
        <div className="bg-gradient h-[243px] px-[12px] rounded-[12px] flex flex-col justify-between items-center">
          <div className="mt-[16px] min-h-[119px] text-center h-[119px] space-y-[8px]">
            <h2 className="text-[26px] w-full font-display mb-4">{`Techember Fest"25`}</h2>
            <p className="px-[12px]">
              Join us for an unforgettable experience at [Event Name]! Secure your spot now.
            </p>
          </div>
          <div className="mb-[16px] text-center">
            <p className="h-[24px]">📍 [Event Location]</p>
            <p className="h-[24px]">March 15, 2025 | 7:00 PM</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#07373F] h-[4px] my-[24px]"></div>

      {/* Ticket Type Selection */}
      <div className="flex flex-col gap-[8px]">
        <label>Select Ticket Type:</label>
        <div className="flex flex-col space-y-[16px] h-[275px] p-[16px] bg-dark border border-[#07373F] rounded-[24px]">
          {/* Regular Access */}
          <Controller
            name="ticketType"
            control={control}
            rules={{ required: 'Ticket Type is required' }}
            render={({ field }) => (
              <div
                onClick={() => field.onChange('regular')}
                className={`flex w-[242px] h-[65px] hover:bg-[#197686] p-[8px] gap-[8px] justify-between rounded-[12px] border ${
                  field.value === 'regular' ? 'border-[#197686]' : 'border-[#07373F]'
                } hover:border-[#197686] cursor-pointer`}
              >
                <div className="flex flex-col gap-[4px] h-[49px]">
                  <p className="text-16px">REGULAR ACCESS</p>
                  <p>20 left!</p>
                </div>
                <div className="flex w-[80px] h-[38px] p-[8px] border border-[#2BA4B9] rounded-[8px] bg-[#0E464F]">
                  <p className="text-[20px] ml-auto">Free</p>
                </div>
              </div>
            )}
          />

          {/* VIP Access */}
          <Controller
            name="ticketType"
            control={control}
            rules={{ required: 'Ticket Type is required' }}
            render={({ field }) => (
              <div
                onClick={() => field.onChange('vip')}
                className={`flex w-[242px] h-[65px] hover:bg-[#197686] p-[8px] gap-[8px] justify-between rounded-[12px] border ${
                  field.value === 'vip' ? 'border-[#197686]' : 'border-[#07373F]'
                } hover:border-[#197686] cursor-pointer`}
              >
                <div className="flex flex-col gap-[4px] h-[49px]">
                  <p className="text-16px">VIP ACCESS</p>
                  <p>20 left!</p>
                </div>
                <div className="flex w-[80px] h-[38px] p-[8px] border border-[#2BA4B9] rounded-[8px] bg-[#0E464F]">
                  <p className="text-[20px] ml-auto">$50</p>
                </div>
              </div>
            )}
          />

          {/* VVIP Access */}
          <Controller
            name="ticketType"
            control={control}
            rules={{ required: 'Ticket Type is required' }}
            render={({ field }) => (
              <div
                onClick={() => field.onChange('vvip')}
                className={`flex w-[242px] h-[65px] hover:bg-[#197686] p-[8px] gap-[8px] justify-between rounded-[12px] border ${
                  field.value === 'vvip' ? 'border-[#197686]' : 'border-[#07373F]'
                } hover:border-[#197686] cursor-pointer`}
              >
                <div className="flex flex-col gap-[4px] h-[49px]">
                  <p className="text-16px">VVIP ACCESS</p>
                  <p>20 left!</p>
                </div>
                <div className="flex w-[80px] h-[38px] p-[8px] border border-[#2BA4B9] rounded-[8px] bg-[#0E464F]">
                  <p className="text-[20px] ml-auto">$150</p>
                </div>
              </div>
            )}
          />
        </div>
        {errors.ticketType && (
          <p className="text-red-500 text-sm mt-2">{errors.ticketType.message}</p>
        )}
      </div>

      {/* Number of Tickets */}
      <div className="h-[80px] flex flex-col my-[24px] gap-[8px]">
        <label className="block text-sm font-medium">Number of Tickets</label>
        <Controller
          name="quantity"
          control={control}
          rules={{ required: 'Number of Tickets is required', min: 1 }}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              className="w-full p-2 h-[48px] bg-transparent focus:ring-2 focus:ring-[#197686]-500 rounded-[12px] border border-[#07373F]"
              min="1"
              onChange={(e) => field.onChange(parseInt(e.target.value))}
            />
          )}
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm mt-2">{errors.quantity.message}</p>
        )}
      </div>
    </div>
  );
};

export default TicketSelection;