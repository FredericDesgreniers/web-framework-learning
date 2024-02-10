import { For, createSignal, createResource, createEffect } from "solid-js";
import Pet from "./Pet";
import createBreedResource from "./createBreedResource";

const localCache = {};

const SearchParams = () => {
  const animals = ["bird", "cat", "dog"];
  const [location, setLocation] = createSignal("");
  const [animal, setAnimal] = createSignal("");
  const [breed, setBreed] = createSignal("");
  const [breeds] = createBreedResource(animal);

  const [pets, { _, refetch }] = createResource(async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal()}&location=${location()}&breed=${breed()}`
    );
    const json = await res.json();
    return json.pets;
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          refetch();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            value={location()}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            htmlFor="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            htmlFor="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            disabled={breeds().length === 0}
          >
            <option />
            <For each={breeds()}>
              {(breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              )}
            </For>
          </select>
        </label>
        <button>Submit</button>
      </form>
      <For each={pets()}>
        {(pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        )}
      </For>
    </>
  );
};

export default SearchParams;
