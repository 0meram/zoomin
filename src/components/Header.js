import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Nav>
            STARTWARS ZOOMIN MOVIES
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
height: 70px;
background-color: #090b13;
color: white;
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;
`;
