import { data_transform } from "./data_transform.mjs";
export async function data_boolean_set(property_name, value) {
  function lambda(previous) {
    let v = null;
    if (value === "1") {
      v = true;
    }
    if (value === "0") {
      v = false;
    }
    return v;
  }
  await data_transform(property_name, null, lambda);
}
