

'use client';


import { useFormContext, Controller } from 'react-hook-form';

const AvatarUpload = ({ onUpload }: { onUpload: (url: string) => void }) => {
  const { control, watch, formState: { errors } } = useFormContext();
  
  const mail = "/img/icon.svg"
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Image Upload Section */}
      <div className="w-full h-[344px] rounded-[24px] p-[24px] flex flex-col gap-[32px] bg-[#052228] border border-[#07373F]">
        <p>Upload Profile Photo</p>
        <div className="w-[240px] md:w-full h-[240px] bg-[#0E464F] flex mx-auto justify-center  bg-umbra">
          <div className="bg-[#0E464F] max-w-[240px] max-h-[240px] flex items-center relative w-full justify-center overflow-hidden rounded-[32px] group">
            <div className="flex items-center justify-center absolute w-full h-full img-cover">
              <Controller
                name="avatar"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          field.onChange(reader.result as string);
                          onUpload(reader.result as string);
                          setIsImageUploaded(true); // Set state to true when image is uploaded
                          setShowtext(false);
                        };
                        reader.readAsDataURL(file);
                       
                      }
                    }}
                    className="absolute cursor-pointer border w-full h-full rounded-[32px] z-10 opacity-0"
                  />
                )}
              />
              {/* Conditionally render the text */}
              
            
              {watch('avatar') ? (
                <p className="text-white rounded absolute w-[192px] text-[16px] text-center disabled:opacity-0">
                  
                </p>
                
              ) : (<p className="text-white absolute rounded w-[192px] text-[16px] text-center  disabled:opacity-50">Drag & drop or click to upload</p>)}

              {errors.avatar && <p className="text-red-500">{errors.avatar.message}</p>}

             
            </div>


            {watch('avatar') && ( 
              <>
                <img
                  src={watch('avatar')}
                  alt="Preview"
                  className="w-full relative rounded-full z-[0]"
                />
                {/* Show text on hover */}
                <p className="text-white rounded w-[192px] text-[16px] text-center absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Drag & drop or click to upload
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Other form fields */}
      <div className="w-full flex flex-col my-[24px] gap-[8px]">
        <label className="block text-sm font-medium">Full Name</label>
        <Controller
          name="fullName"
          control={control}
          rules={{ required: 'Full Name is required' }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="w-full p-2 h-[48px] bg-transparent focus:ring-2 focus:ring-[#197686]-500 rounded-[12px] border border-[#07373F]"
            />
          )}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-2">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="w-full h-[80px] flex flex-col my-[24px] gap-[8px]">
        <label className="block text-sm font-medium">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <div className="w-full p-[6px] gap-[8px] h-[48px] flex items-center bg-transparent focus:ring-2 focus:ring-[#197686]-500 rounded-[12px] border border-[#07373F]">
              
                <img
                  src={mail}
                  alt="Preview"
                  className="w-[1.5rem] relative z-[0]"
                />

                <input
                {...field}
                type="email"
                className=" p-[4px] h-[20px] w-[80%] bg-transparent focus:ring-2 focus:border-0 focus:outline-0  focus:ring-[#07373F]-500 rounded-[2px] "
                />
            </div>
          )}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
        )}
      </div>

      {/* About the Project Field */}
      <div className="w-full flex flex-col my-[24px] gap-[8px]">
        <label className="block text-sm font-medium">About the Project</label>
        <Controller
          name="about"
          control={control}
          rules={{ required: 'About the Project is required' }}
          render={({ field }) => (
            <textarea
              {...field}
              className="w-full p-[12px] h-[127px] bg-transparent rounded-[12px] border border-[#07373F]"
            />
          )}
        />
        {errors.about && (
          <p className="text-red-500 text-sm mt-2">{errors.about.message}</p>
        )}
      </div>
    </div>
  );
};

export default AvatarUpload;