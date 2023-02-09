import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 2px solid rgb(236, 236, 236);
    box-shadow: 0px 15px 10px -15px #111;
    > nav {
    display: flex;
    }
`;

export const Link = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-size: 24px;
    font-weight: 500;
    &.active {
    color: white;
    background-color: orangered;
    }
`;
