import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: Path<any>;
  register: UseFormRegister<any>;
}

const Input = ({
  label,
  register,
  required,
  name,
  placeholder,
  type,
}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {
          ...register(label, { required })
        }
        className="h-8 outline-none rounded-md p-1 w-full"
      />
    </>
  );
};

export default Input;
