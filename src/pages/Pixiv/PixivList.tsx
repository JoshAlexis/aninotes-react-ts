import React from 'react';
import { useQuery } from 'react-query';
import PixivServices from 'src/services/PixivService';
/* eslint-disable  import/extensions */
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '../../components/Table';
import { pixivHeaders } from './data';

const PixivList = () => {
  const { data: pixivItems } = useQuery('pixivItems', PixivServices.getItems);

  return (
    <Table>
      <TableHeader headers={pixivHeaders} actions />
      <TableBody>
        {
          pixivItems?.data?.map((pixiv) => {
            return (
              <TableRow key={pixiv.idPixiv}>
                <TableCell>{pixiv.idPixiv}</TableCell>
                <TableCell>{pixiv.Content}</TableCell>
                <TableCell>{pixiv.Favorite}</TableCell>
                <TableCell>
                  <button type="button">Edit</button>
                </TableCell>
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  );
};

export default PixivList;
