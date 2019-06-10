/**
 * User: clint
 * Date: 2019-06-10
 * Time: 16:08
 *
 * Rebasoft - Network Intelligence
 */
import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";

const MainMenuWrapper = styled.div`
  display: flex;
  background: crimson;
`;

const MenuItem = styled(Link)`
  color: #fff;
  display: block;
  padding: 8px 16px;
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
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          item => (
            <MenuItem to={item.object_slug} key={item.title}>
              {item.title}
            </MenuItem>
          )
        )}
      </MainMenuWrapper>
    )}
  />
);

export default MainMenu;
