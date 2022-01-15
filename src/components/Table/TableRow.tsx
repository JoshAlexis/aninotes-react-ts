import { ReactNode } from 'react';

type TableRowProps = {
  children: ReactNode
};

const TableRow = ({ children }: TableRowProps) => {
  return (
    <tr className="bg-gray-300">
      {children}
    </tr>
  );
};

export default TableRow;
