import React from 'react';
import { css } from 'styled-components';
import Navegacion from './nav';
import styled from 'styled-components';
import { Link } from 'gatsby';

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {
    return (
        <header
            css={css`
                background-color: rgba(44,62,80);
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <EnlaceHome to='/'>
                    <h1>Hotel Gatsby</h1>
                </EnlaceHome>
                <Navegacion />
            </div>
        </header>

    );
}
 
export default Header;