import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width:450px;
    line-height:56px;

    margin-top:80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width:750px;

    display:flex;
    /* Display flex faz com que um fique do lado do outro */
    input{
        flex:1;
        height:70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0;
        color: #3a3a3a;
        /* Entretanto quando se utiliza o flex:1 força o input se extender ao máximo permitido que é 750px */
        &::placeholder{
            color: #a8a8b3;
        }
    }
    button{
        width:210px;
        height:70px;
        background: #04d361;
        border-radius: 0 5px;
        border: 0;
        color: #fff;
        font-weight:bold;
        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#04d361')}
        }
    }
`;

export const Repositories = styled.div``;
