import { ReactNode } from 'react';

type TableProps = {
  children: ReactNode
}

const Table = ({ children }: TableProps) => {
  return (
    <div className="w-4/5">
      <table className="table w-full border-separate text-sm">
        {children}
      </table>
    </div>
  );
};

export default Table;
