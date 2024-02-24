import { useParams } from "@solidjs/router";

const Details = () => {
  const { id } = useParams();
  return <h2>hi! {id}</h2>;
};

export default Details;
