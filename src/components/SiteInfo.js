/**
 * User: clint
 * Date: 2019-06-10
 * Time: 16:59
 *
 * Rebasoft - Network Intelligence
 */
import React from "react";
import { graphql, StaticQuery } from "gatsby";

const SiteInfo = () => (
  <StaticQuery query={graphql``} render={props => <div>🔥</div>} />
);
