import Container from '../../components/Container';
/* eslint-disable  import/extensions */
import { Navbar } from '../../components/Navbar';
import Title from '../../components/Title';
import PixivList from './PixivList';

const PixivHome = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Pixiv List</Title>
        <PixivList />
      </Container>
    </>
  );
};

export default PixivHome;
