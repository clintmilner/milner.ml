/**
 * User: clint
 * Date: 2019-06-10
 * Time: 16:59
 *
 * Rebasoft - Network Intelligence
 */
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: #fff;
  margin: auto 0;
`;

const SiteTitle = styled.div`
  font-weight: bold;
`;
const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <SiteTitle>
          {props.allWordpressSiteMetadata["edges"][0].node.name}
        </SiteTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: props.allWordpressSiteMetadata["edges"][0].node.description
          }}
        />
      </SiteInfoWrapper>
    )}
  />
);

export default SiteInfo;
