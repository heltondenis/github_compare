import React, { Component } from 'react';
import Logo from '../../assets/logo.png';
import GlobalStyle from '../../styles/global';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {

    state = {
        repositoryInput: '',
        repositories: [],
    };

    handleAddRepository = async (e) => {
        e.preventDefault();

        try {
            const response = await api.get(`/repos/${this.state.repositoryInput}`);

            this.setState({
                repositoryInput: '',
                repositories: [...this.state.repositories, response.data]
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Container>
                <GlobalStyle />
                <img src={Logo} alt="Github Compare" />
                <h1>{this.state.repositoryInput}</h1>
                <Form onSubmit={this.handleAddRepository}>
                    <input type="text" placeholder="usuário/repositório"
                        value={this.state.repositoryInput}
                        onChange={e => this.setState({ repositoryInput: e.target.value })}
                    />
                    <button type="submit">Ok</button>
                </Form>
                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}

