import "./Entity.css";

const Entity = ({ name, img, level }) => {
  return (
    <div className="entity">
      <img src={img} alt={name} />
      <div className="info">
        <h2>{name}</h2>
        <p>Level: {level}</p>
        <h2>Description</h2>
      </div>
    </div>
  );
};

export default Entity;
