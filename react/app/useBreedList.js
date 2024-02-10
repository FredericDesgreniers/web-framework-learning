import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      fetchBreedList();
    }

    async function fetchBreedList() {
      setBreedList([]);
      setStatus("loading");
      const rest = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );
      const json = await rest.json();
      const breeds = json.breeds || [];
      localCache[animal] = breeds;
      setBreedList(breeds);
    }
  }, [animal]);

  return [breedList, status];
}
