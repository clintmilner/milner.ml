/**
 * User: clint
 * Date: 2019-06-10
 * Time: 15:24
 *
 * Rebasoft - Network Intelligence
 */

import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`;

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <strong>Website URL:</strong>
    <a
      href={pageContext.acf.portfolio_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {pageContext.acf.portfolio_url}
    </a>
    <br />
    <strong>Users:</strong> {pageContext.acf.favorite_number}
    <div>
      <FeaturedImage src={pageContext.featured_media.source_url} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
);
