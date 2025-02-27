
'use client';

import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import TicketSelection from '@/components/TicketSelection';
import AvatarUpload from '@/components/AvatarUpload';
import TicketPreview from '@/components/TicketPreview';
import TicketCard from '@/components/TicketCard';
const steps = ['Ticket Selection', 'Attendee Details', 'Ready'];

// Define a TypeScript interface for the form data
interface TicketFormData {
  fullName: string;
  email: string;
  avatar: string;
  ticketType: 'regular' | 'vip' | 'vvip' | string;
  quantity: number;
  name: string; 
  about: string; 
  
}




const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentNum, setCurrentNum] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize react-hook-form with explicit type
  const methods = useForm<TicketFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      avatar: '',
      ticketType: '',
      quantity: 1,
      name: '',
      about: '',
    },
  });

  // Destructure methods for easier access
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
    trigger,
  } = methods;

  // Watch all form values
  const formValues = watch();

  // Load form data from local storage on component mount
  useEffect(() => {
    try {
      const savedFormData = localStorage.getItem('formData');
      if (savedFormData) {
        const parsedData: Partial<TicketFormData> = JSON.parse(savedFormData);
        Object.entries(parsedData).forEach(([key, value]) => {
          if (value !== undefined) {
            setValue(key as keyof TicketFormData, value);
          }
        });
      }
    } catch (error) {
      console.error('Failed to load form data from local storage:', error);
    }
  }, [setValue]);

  // Save form data to local storage whenever form values change
  useEffect(() => {
    try {
      localStorage.setItem('formData', JSON.stringify(formValues));
    } catch (error) {
      console.error('Failed to save form data to local storage:', error);
    }
  }, [formValues]);

  const nextStep = async () => {
    let isValid = false;

    // Validate only the fields relevant to the current step
    switch (currentStep) {
      case 0: // Ticket Selection
        isValid = await trigger(['ticketType', 'quantity']);
        break;
      case 1: // Attendee Details
        isValid = await trigger(['fullName', 'email', 'avatar']);
        break;
      default:
        isValid = true; // No validation needed for the final step
    }

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      setCurrentNum((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    setCurrentNum((prev) => prev - 1);
  };

  const cancelForm = () => {
    localStorage.removeItem('formData'); // Clear local storage
    reset(); // Reset form fields to default values
    alert('Form cancelled!');
  };

  const onSubmit = async (data: TicketFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form Submitted:', data);
      localStorage.removeItem('formData'); // Clear local storage on submit
      alert('Form Submitted!');
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <TicketSelection 
                control={control} 
                errors={errors} 
                setValue={setValue} 
              />;
      case 1:
        return <AvatarUpload
        control={control}
        errors={errors}
        setValue={setValue}
        onUpload={(url) => setValue("avatar", url)} // Add this prop
      />;
      case 2:
        console.log('Form Data:', formValues);
        return (
          <TicketPreview
            fullName={formValues.fullName}
            email={formValues.email}
            avatar={formValues.avatar}
            ticketType={formValues.ticketType}
            quantity={formValues.quantity}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full flex flex-col items-center py-10 text-white">
        <TicketCard
          header={steps[currentStep]}
          headerNumber={`${currentNum}/3`}
          showCancelButton={currentStep === 0} // Show Cancel button only for the first step
          showPrevButton={currentStep > 0} // Show Previous button for steps after the first
          showNextButton={currentStep < steps.length - 1}
          showSubmitButton={currentStep === steps.length - 1}
          onCancelClick={cancelForm}
          onPrevClick={prevStep}
          onNextClick={nextStep}
          onSubmitClick={handleSubmit(onSubmit)}
          cancelButtonText="Cancel"
          prevButtonText="Previous"
          nextButtonText="Next"
          submitButtonText="Generate Ticket"
          isLoading={isSubmitting}
          progress={(currentStep + 1) * (100 / steps.length)} // Dynamic progress
        >
          {renderStepComponent()}
        </TicketCard>
      </div>
    </FormProvider>
  );
};

export default MultiStepForm;
