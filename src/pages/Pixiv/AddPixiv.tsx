import { useForm } from 'react-hook-form';
import Container from '../../components/Container';
/* eslint-disable import/extensions */
import { Form, FormContainer, Input } from '../../components/Form';
import { Navbar } from '../../components/Navbar';
import Title from '../../components/Title';

const AddPixiv = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Add new Item</Title>
        <FormContainer>
          <Form onSubmit={() => {}}>

          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default AddPixiv;
