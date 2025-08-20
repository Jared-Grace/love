import {data_transform} from "./data_transform.mjs";
export async function data_set(value_get, property_name) {
  function lambda(previous) {
    let v2 = value_get(previous);
    return v2;
  }
  await data_transform(property_name, null, lambda);
}
