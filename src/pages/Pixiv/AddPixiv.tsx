import React from 'react';
import Container from 'src/components/Container';
import { Form, FormContainer } from 'src/components/Form';
import { Navbar } from 'src/components/Navbar';
import Title from 'src/components/Title';

const AddPixiv = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>
          Add new Pixiv
        </Title>
        <FormContainer>
          <Form onSubmit={() => {}}>
            <input type="number" placeholder="idPixiv" />
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default AddPixiv;
