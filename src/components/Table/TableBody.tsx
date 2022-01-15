import { ReactNode } from 'react';

type TableBodyProps = {
  children: ReactNode
};

const TableBody = ({ children }: TableBodyProps) => {
  return (
    <tbody className="text-center">
      {children}
    </tbody>
  );
};

export default TableBody;
