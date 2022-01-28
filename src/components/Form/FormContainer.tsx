import React from 'react';

type FormContainerProps = {
  children: React.ReactNode
};

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className="w-1/3 bg-opacity-80 bg-white rounded-md px-2 py-4 mt-3 flex flex-col items-center">
      {children}
    </div>
  );
};

export default FormContainer;
