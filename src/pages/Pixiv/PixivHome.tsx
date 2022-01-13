import Container from '../../components/Container';
/* eslint-disable  import/extensions */
import { Navbar } from '../../components/Navbar';
import Title from '../../components/Title';

const PixivHome = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Pixiv List</Title>
      </Container>
    </>
  );
};

export default PixivHome;
