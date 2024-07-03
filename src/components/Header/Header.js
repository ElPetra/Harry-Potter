import "./Header.css";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <Container>
      <div className="header">
        <h1 className="mainTitle">Harry Potter</h1>
        <p className="headerText">
          View all characters from the Harry Potter universe
        </p>
      </div>
    </Container>
  );
};


