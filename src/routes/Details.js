import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
  console.log("params", params);
  return <div>Details page</div>;
}

export default Details;
