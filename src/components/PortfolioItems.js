/**
 * User: clint
 * Date: 2019-06-12
 * Time: 16:20
 *
 * Rebasoft - Network Intelligence
 */
import React from 'react';
import {Link, StaticQuery, graphql} from "gatsby";

const PortfolioItems = () => {
    return (
        <StaticQuery query={graphql`{
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
}`} render={props => props.allWordpressWpPortfolio.edges.map(item => (
            <div key={item.node.id}>
                <h2 dangerouslySetInnerHTML={{__html: item.node.title}} />
                <img width={'100%'} src={item.node.featured_media.source_url} alt={item.node.title} />
                <div dangerouslySetInnerHTML={{__html: item.node.excerpt}} />
                <Link to={`portfolio/${item.node.slug}`}>Read More</Link>
            </div>
        ))} />
    );
};
export default PortfolioItems;