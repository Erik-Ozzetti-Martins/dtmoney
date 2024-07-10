import React from "react";
//import errorNot404 from "../../assets/errorNot404.gif";
import errorNot404 from "../../../assets/errorNot404.gif";
import { Container } from "./notfound";

export function NotFoundViw() {
  return (
    <Container>
      <h2> Not found Page</h2>
      <img src={errorNot404} alt="not found page" />
    </Container>
  );
}
