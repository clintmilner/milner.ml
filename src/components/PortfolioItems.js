/**
 * User: clint
 * Date: 2019-06-12
 * Time: 16:20
 *
 * Rebasoft - Network Intelligence
 */
import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PortfolioItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`;
const PortfolioImage = styled.img`
  max-width: 100%;
`;

const PortfolioItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                id
                title
                slug
                featured_media {
                  source_url
                }
                excerpt
              }
            }
          }
        }
      `}
      render={props => (
        <PortfolioItemsWrapper>
          {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
            <PortfolioItem key={portfolioItem.node.id}>
              <h2
                dangerouslySetInnerHTML={{ __html: portfolioItem.node.title }}
              />
              <PortfolioImage
                src={portfolioItem.node.featured_media.source_url}
                alt={portfolioItem.node.title}
              />
              <div
                dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }}
              />
              <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                Read More
              </Link>
            </PortfolioItem>
          ))}
        </PortfolioItemsWrapper>
      )}
    />
  );
};
export default PortfolioItems;
