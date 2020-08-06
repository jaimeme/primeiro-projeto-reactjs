import React from 'react';
import { Title, Form, Repositories } from './styles'

import logoImg from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"></input>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="" alt="" />
                </a>
            </Repositories>
        </>
    )
}
export default Dashboard;
