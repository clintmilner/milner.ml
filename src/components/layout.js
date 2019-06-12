/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import MainMenu from "./MainMenu";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
   //@import url('https://fonts.googleapis.com/css?family=Cinzel');
    body {
            font-family: 'Helvetica', sans;
            margin: 0;
        }
`;

const LayoutWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
);

export default Layout;
