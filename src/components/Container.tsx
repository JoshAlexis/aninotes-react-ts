import React from 'react';

type ContainerProps = {
  children: React.ReactNode
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      {children}
    </div>
  );
};

export default Container;
