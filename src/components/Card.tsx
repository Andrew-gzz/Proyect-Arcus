interface CardProps {
  body: string;
}

function Card(props: CardProps) {
  const { body } = props;
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">{CardBody({ body })}</div>
    </div>
  );
}

export function CardBody(props: CardProps) {
  const { body } = props;
  return (
    <div>
      <h5 className="card-title">{body}</h5>
      <p className="card-text">
        Tipica frase del chepudo del youtuber ruben me la dobla
      </p>
      <a href="#" className="btn btn-primary">
        Boton feliz
      </a>
    </div>
  );
}

export default Card;
