import type React from 'react';

interface IconProps {
  className?: string;
}

export const PlusIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="25"
      viewBox="0 0 27 25"
      width="27"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Plus icon</title>
      <line
        stroke="currentColor"
        strokeWidth="4.63"
        x1="13.2344"
        x2="13.2344"
        y1="2.27374e-08"
        y2="24.56"
      />
      <line
        stroke="currentColor"
        strokeWidth="4.63"
        x2="26.44"
        y1="12.28"
        y2="12.28"
      />
    </svg>
  );
};
