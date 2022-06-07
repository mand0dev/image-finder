import styled from 'styled-components';
import { device } from './Devices';

export const SearchBar = styled.div`
    width: 100%;
    background: #354259;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3em;
    padding-bottom: 3em;`;

export const Form = styled.form``;

export const Input = styled.input`
    padding: 1em 2em;
    font-size: 1em;
    border-radius: 0.4em 0 0 0.4em;
    border: none;
    outline: none;`;

export const Button = styled.button`
    background: #FF5D5D;
    color: #fff;
    padding: 1em 2em;
    font-size: 1em;
    border-radius: 0 0.4em 0.4em 0;
    border: none;
    outline: none;
    cursor: pointer;`;

export const Gallery = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 300px;
    gap: 16px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    img:nth-child(3n) {
        grid-column: span 2;
        grid-row: span 2;
    }
    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 200px;
    }`;

export const Container = styled.div`
    margin-top: 2em;
    margin-bottom: 2em;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media ${device.mobile} {
        width: 750px;
    }
    @media ${device.tablet} {
        width: 970px;
    }
    @media ${device.desktop} {
        width: 1170px;
    }`;