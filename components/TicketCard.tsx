import React, { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
  header?: string;
  headerNumber?: string | number;
  showCancelButton?: boolean;
  showPrevButton?: boolean;
  showNextButton?: boolean;
  showSubmitButton?: boolean;
  onCancelClick?: () => void;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  onSubmitClick?: () => void;
  cancelButtonText?: string;
  prevButtonText?: string;
  nextButtonText?: string;
  submitButtonText?: string;
  progress?: number;
  isLoading?: boolean;
  width?: string;
}

const TicketCard: React.FC<CardProps> = ({
  children,
  className = '',
  header,
  headerNumber,
  showCancelButton = false,
  showPrevButton = false,
  showNextButton = false,
  showSubmitButton = false,
  onCancelClick,
  onPrevClick,
  onNextClick,
  onSubmitClick,
  cancelButtonText = 'Cancel',
  prevButtonText = 'Previous',
  nextButtonText = 'Next',
  submitButtonText = 'Submit',
  progress = 0,
  isLoading = false,
  width = '95%',
}) => {
  const renderButton = (
    onClick: () => void,
    text: string,
    variant: 'solid' | 'outline' | 'transparent', // Add 'transparent' variant
    isDisabled?: boolean
  ) => {
    let buttonClass = '';

    switch (variant) {
      case 'solid':
        buttonClass = 'bg-[#24A0B5] hover:bg-[#1E8A9D] w-full md:w-[139.5px] text-white';
        break;
      case 'outline':
        buttonClass = 'bg-transparent border border-[#24A0B5] w-full md:w-[139.5px] text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white';
        break;
      case 'transparent': // New variant for Cancel button
        buttonClass = 'bg-transparent border border-[#24A0B5] w-full md:w-[139.5px] text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white';
        break;
      default:
        buttonClass = 'bg-[#24A0B5] hover:bg-[#1E8A9D] w-full md:w-[139.5px] text-white';
    }

    return (
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`${buttonClass} h-[48px] rounded-[8px] transition-colors duration-200 ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? 'Loading...' : text}
      </button>
    );
  };

  return (
    <div
      className={`md:bg-[#041E23] bg-[#08252B] overflow-hidden shadow-md p-6 ${className} rounded-[12px] border border-[#197686] max-w-[335px] md:max-w-[700px]`}
      style={{ width }}
    >
      {/* Header Section */}
      {(header || headerNumber) && (
        <div className='h-[76px] w-auto  mb-[24px]'>
          <div className="md:flex  justify-between items-center mb-4 p-0 space-y-[12px]">
            {header && <h2 className="text-xl font-bold">{header}</h2>}
            {headerNumber && (
              <span className="text-white text-sm">Step {headerNumber}</span>
            )}
          </div>
          <div className='bg-[#0E464F] h-[4px] w-full rounded-[5px]'>
            <div
              className='bg-[#24A0B5] h-[4px] rounded-[5px]'
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`md:bg-[#08252B] bg-[#08252B] md:p-4 md:border md:rounded-[12px] md:border border-[#197686] ${className} md:max-w-[455px]  mx-auto `}>
        {children && <div className="mb-4">{children}</div>}

        {/* Button Section */}
        <div className="flex flex-col md:flex-row gap-[16px] md:justify-center md:gap-[32px] md:w-[407px] md:bg-[#041E23] md:border border-[#0E464F] h-[112px] md:h-[48px] md:rounded-full">
          {showNextButton && renderButton(onNextClick, nextButtonText, 'solid', isLoading)}
          {showSubmitButton && renderButton(onSubmitClick, submitButtonText, 'solid', isLoading)}
          {showCancelButton && renderButton(onCancelClick, cancelButtonText, 'transparent')} {/* Use 'transparent' variant */}
          {showPrevButton && renderButton(onPrevClick, prevButtonText, 'outline')}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;