import { data_transform } from "./data_transform.mjs";
export async function data_set(lambda$previous, property_name) {
  function lambda(previous) {
    let v2 = lambda$previous(previous);
    return v2;
  }
  await data_transform(property_name, null, lambda);
}
