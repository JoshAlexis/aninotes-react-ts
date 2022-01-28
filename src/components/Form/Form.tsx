import React, { FormEvent } from 'react';

/* eslint-disable  no-unused-vars */
type FormProps = {
  children: React.ReactNode,
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
};

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="w-3/5 flex flex-col justify-start items-center">
      {children}
    </form>
  );
};

export default Form;
