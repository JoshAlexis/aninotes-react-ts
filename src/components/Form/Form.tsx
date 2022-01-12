import React, { FormEvent } from 'react';

/* eslint-disable  no-unused-vars */
type FormProps = {
  children: React.ReactNode,
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <div className="md:w-2/3 flex flex-col justify-start items-center">
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
