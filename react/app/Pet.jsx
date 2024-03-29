const Pet = ({ name, animal, breed, location, images, id }) => {
  let hero =
    images.length > 0
      ? images[0]
      : "http://pets-images.dev-apis.com/pets/none.jpg";
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
