import s from "./Nav.module.css";
import { Container } from "../Container/Container";

export const Nav = ({ searchName, changValue, handleSelect, schoolName }) => {
  return (
    <section className={s.nav}>
      <Container>
        <div className={s.searchForm}>
          <div className={s.searchName}>
            <p className={s.searchText}>Name</p>
            <input
              type="text"
              className={s.input}
              placeholder="Hermione"
              onChange={(event) => changValue(event.target.value)}
              searchName={searchName}
            ></input>
          </div>
          <div className={s.selectSchool}>
            <p className={s.searchText}>School</p>
            <select
              className={s.select}
              onChange={handleSelect}
              schoolName={schoolName}
            >
              <option value="">Choose one</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </div>
        </div>
      </Container>
    </section>
  );
};
