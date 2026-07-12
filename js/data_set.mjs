import { data_transform } from "./data_transform.mjs";
export async function data_set(lambda$previous, property_name, d_path) {
  function lambda(previous) {
    let v = lambda$previous(previous);
    return v;
  }
  await data_transform(property_name, null, lambda, d_path);
}
