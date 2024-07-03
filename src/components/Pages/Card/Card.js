import s from "./Card.module.css";
// import img from "../../../images/Hermione.png";

export const Card = ({ img, name, actor, gender, house, wand, alive }) => {
  return (
    <article className={s.article}>
      <div className={s.boxImg}>
        <img className={s.cardImg} src={img} alt="" />
      </div>
      <div className={s.descr}>
        <h2 className={s.cardTitle}>{name}</h2>
        <p className={s.cardText + " " + s.actor}>Actor: {actor}</p>
        <p className={s.cardText + " " + s.gender}>Gender: {gender}</p>
        <p className={s.cardText + " " + s.house}>House: {house}</p>
        <p className={s.cardText + " " + s.wand}>Wand core: {wand}</p>
        <p className={s.cardText + " " + s.alive}>Alive: {alive}</p>
      </div>
    </article>
  );
};
