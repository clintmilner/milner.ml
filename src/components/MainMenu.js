/**
 * User: clint
 * Date: 2019-06-10
 * Time: 16:08
 *
 * Rebasoft - Network Intelligence
 */
import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import SiteInfo from "./SiteInfo";

const MainMenuWrapper = styled('nav')`
  display: flex;
  background: #efda49;
  box-shadow: 0 0 4px #00000048;
`;

const MainMenuInner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  width: 1024px;
  height: 100%;
`;

const MenuItem = styled(Link)`
  color: #fff;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 16px;
  &:hover,
  &.active {
    text-decoration: underline;
  }
`;
const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <SiteInfo />

          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <MenuItem to={`/${item.object_slug}`} key={item.title}>
                {item.title}
              </MenuItem>
            )
          )}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  />
);

export default MainMenu;
