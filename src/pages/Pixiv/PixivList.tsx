import { useQuery } from 'react-query';
/* eslint-disable  import/extensions */
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '../../components/Table';
import PixivService from '../../services/PixivService';
import { pixivHeaders } from './data';

const PixivList = () => {
  const { data } = useQuery("pixivitems", async () => {
    const data = await PixivService.getPixivItems();
    return data
  })

  return (
    <Table>
      <TableHeader headers={pixivHeaders} actions />
      <TableBody>
        {
          data?.map((pixiv) => {
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
