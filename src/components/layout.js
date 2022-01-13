import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import { createGlobalStyle } from "styled-components"


const Layout = (props) => {

    const GlobalStyle = createGlobalStyle`
        html {
            font-size: 62.5%;
        }
        body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif;
        }
        h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
        }
        h1, h2 {
            font-family: 'Roboto', serif;
        }
        h1 {
            font-family: 'PT Sans', sans-serif;
        }
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
    `

    return (
        <>
            <GlobalStyle />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' rel='stylesheet' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
            <h1>{props.children}</h1>
        </>
    );
}
 
export default Layout;