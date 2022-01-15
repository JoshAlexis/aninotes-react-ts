import { ReactNode } from 'react';

type TableCellProps = {
  children: ReactNode
};

const TableCell = ({ children }: TableCellProps) => {
  return (
    <td className="p-3">
      {children}
    </td>
  );
};

export default TableCell;
