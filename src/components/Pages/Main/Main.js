import { Container } from "../../Container/Container";
import { Card } from "../Card/Card";
import s from "./Main.module.css";

export const Main = ({ filtered }) => {
  return (
    <section className={s.main}>
      <Container>
        <div className={s.flexWrapper}>
          {filtered.map((el) => (
            <Card
              img={el.image}
              name={el.name}
              actor={el.actor}
              gender={el.gender}
              house={el.house}
              wand={el.wand.core}
              alive={el.alive ? "yes" : "no"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
