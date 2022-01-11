import { CogIcon } from '@heroicons/react/solid';

type TableHeaderProps = {
  headers: string[],
  actions?: boolean
}

const TableHeader = ({ headers, actions }: TableHeaderProps) => {
  return (
    <thead className="text-gray-700 bg-white bg-opacity-50">
      <tr>
        {
          headers.map((header) => {
            return (<th key={header} className="p-3">{header}</th>);
          })
        }
        {
          actions && (
            <th>
              <CogIcon className="m-auto h-5 w-5" aria-label="actions-icons" />
            </th>
          )
        }
      </tr>
    </thead>
  );
};

export default TableHeader;
