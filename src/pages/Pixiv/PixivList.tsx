// import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import PixivService from 'src/services/PixivService';
import { FetchParams } from 'src/types';
// import { Pixiv, Response } from 'src/types';
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
  const { data: pixivItems } = useQuery(['pixivItems', { limit: 10, page: 1 }], async ({ queryKey }) => {
    return PixivService.getItems(queryKey[1] as FetchParams);
  });
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
