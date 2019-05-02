import React from 'react';
import Logo from '../../assets/logo.png';
import GlobalStyle from '../../styles/global';
import { Container, Form } from './styles';


const Main = () => (

    <Container>
        <GlobalStyle />
        <img src={Logo} alt="Github Compare" />

        <Form>
            <input type="text" placeholder="usuário/repositório" />
            <button type="submit"> Ok </button>
        </Form>
    </Container>
);

export default Main;
