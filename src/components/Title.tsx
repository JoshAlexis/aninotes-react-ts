import React from 'react';

type TitleProps = {
  children: React.ReactNode
};

const Title = ({ children }: TitleProps) => {
  return (
    <div className="font-semibold text-3xl text-gray-100 mt-4">
      {children}
    </div>
  );
};

export default Title;
