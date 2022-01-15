import React from 'react';
/* eslint-disable  import/extensions */
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '../../components/Table';
import { pixivItems, pixivHeaders } from './data';

const PixivList = () => {
  return (
    <Table>
      <TableHeader headers={pixivHeaders} actions />
      <TableBody>
        {
          pixivItems.map((pixiv) => {
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
