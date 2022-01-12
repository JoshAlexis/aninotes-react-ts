import React from 'react';

type FormContainerProps = {
  children: React.ReactNode
}

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className="bg-opacity-80 bg-white rounded-md p-5 mt-3 flex flex-col items-center">
      {children}
    </div>
  );
};

export default FormContainer;
