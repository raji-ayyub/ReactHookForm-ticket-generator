import Image from "next/image";

const ticketag = "/img/star.svg";
const barcode = "/img/image 108.svg";

interface TicketPreviewProps {
  fullName: string;
  email: string;
  avatar: string; // Make avatar required
  ticketType: string;
  quantity: number;
}

const TicketPreview = ({ fullName, email, avatar, ticketType, quantity }: TicketPreviewProps) => {
  // If required fields are missing, show a message
  if (!fullName || !email || !avatar || !ticketType || !quantity) {
    return (
      <div className="text-center w-full h-[5rem] flex items-center justify-center">
        Please fill all form fields.
      </div>
    );
  }

  return (
    <div className="flex flex-col pb-2 w-full gap-[12px]">
      {/* Header Section */}
      <div className="flex flex-col gap-[12px] h-[94px]">
        <h2 className="text-lg w-[241px] font-bold">Your Ticket is Booked!</h2>
        <p className="w-[241px]">You can download or check your email for a copy</p>
      </div>

      {/* Ticket Design */}
      <div className="flex text-[8.6px]">
        {/* Left Partition */}
        <div className="partition-a relative w-[232px] p-[5px] pl-0 h-[99.5px] border flex gap-[8px]">
          <div className="flex flex-col gap-[0px] items-center">
            <Image
              src={barcode}
              alt="barcode"
              width={200}
              height={200}
              className="w-[78px] h-[76px] barcode"
            />
            <p className="text-[7px] mt-[-5px]">Ticket for {quantity} entity</p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-[10px] mt-2 brand-text">Techember Fest {`"25`}</h2>
            <p className="mt-1">📍 04 Rumens Road, Ikoyi, Lagos</p>
            <p className="mt-[-6px]">📅 March 15, 2025 | 7:00 PM</p>

            {/* Attendee Details */}
            <div className="hidden mt-2 flex items-center gap-2">
              <Image
                src={avatar}
                alt="Profile"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-[8px] font-semibold">{fullName}</p>
                <p className="text-[6px] text-gray-400">{email}</p>
              </div>
            </div>

            {/* --------------- */}

            <h2 className="no-linehight absolute bottom-1 right-2 brand-text text-right text-[12px] text-gray-400">
              Techember <br />
              Fest{`"25`}
            </h2>
          </div>

          <Image
            src={ticketag}
            alt="ticket tag"
            width={100}
            height={100}
            className="w-[34px] absolute top-[2px] right-[1px]"
          />
        </div>

        {/* Ticket Rip */}
        <div className="bg-gray-200 ticketrip"></div>

        {/* Right Partition */}
        <div className="partition-b relative flex border h-[99.5px] items-center justify-center w-[47px]">
          <h2 className="tag absolute top-[2rem] right-[0.16rem] w-[4.6rem] text-[7px] brand-text">
            Techember Fest{`"25`}
          </h2>
          <p className="tag absolute w-[4.5rem] top-[2rem] right-[-0.4rem] text-[4px]">
            📍 04 Rumens Road, Ikoyi, Lagos
          </p>
          <p className="tag absolute w-[4.5rem] top-[2rem] right-[-0.9rem] text-[4px]">
            📅 March 15, 2025 | 7:00 PM
          </p>
          <p className="absolute bottom-1 rotate-[180deg] brand-text text-[1rem]">
            {ticketType.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketPreview;