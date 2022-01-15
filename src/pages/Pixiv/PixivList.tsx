import { useEffect, useState } from 'react';
/* eslint-disable  import/extensions */
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '../../components/Table';
import { getPixivItems } from '../../services/PixivService';
import Pixiv from '../../types/Pixiv';
import { pixivHeaders } from './data';

const PixivList = () => {
  const [pixivItems, setPixivItems] = useState<Pixiv[]>([]);

  const fetchItems = async () => {
    try {
      const response = await getPixivItems();
      setPixivItems(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Table>
      <TableHeader headers={pixivHeaders} actions />
      <TableBody>
        {
          pixivItems?.map((pixiv) => {
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
