/**
 * User: clint
 * Date: 2019-06-13
 * Time: 14:17
 *
 * Rebasoft - Network Intelligence
 */
import React from "react";
import styled from "styled-components";

const LogoContainer = styled("h1")``;

const Logo = () => (
  <LogoContainer dangerouslySetInnerHTML={{ __html: "&lt;CM /&gt;" }} />
);
export default Logo;
