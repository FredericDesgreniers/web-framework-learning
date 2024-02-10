import { createResource } from "solid-js";

const localCache = {};
export default function createBreedResource(animal) {
  return createResource(
    animal,
    async () => {
      if (!animal()) {
        return [];
      } else if (localCache[animal()]) {
        return localCache[animal()];
      } else {
        return await fetchBreedList();
      }

      async function fetchBreedList() {
        const rest = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal()}`
        );
        const json = await rest.json();
        const breeds = json.breeds || [];
        localCache[animal] = breeds;
        return breeds;
      }
    },
    {
      initialValue: [],
    }
  );
}
