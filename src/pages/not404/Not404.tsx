import errorNot404 from "../../assets/errorNot404.gif";
import { Container } from "./not404";

export function Not404() {
  return (
    <Container>
      <h2> Not found Page</h2>
      <img src={errorNot404} alt="not found page" />
    </Container>
  );
}
