const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.species}</h2>
    </div>
  );
};

export default Pet;
