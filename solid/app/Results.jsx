import { For } from "solid-js";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <For each={pets()} fallback={<h1>No Pets Found</h1>}>
      {(pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          data-index={pet.id}
          id={pet.id}
        />
      )}
    </For>
  );
};

export default Results;
