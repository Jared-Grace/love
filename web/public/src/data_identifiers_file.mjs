import { data_transform } from "./data_transform.mjs";
import { marker } from "./marker.mjs";
export async function data_identifiers_file(parsed) {
  marker("1");
  let property_name = "identifiers";
  function lambda(previous) {}
  let v = await data_transform(property_name, {}, lambda);
  return v;
}
