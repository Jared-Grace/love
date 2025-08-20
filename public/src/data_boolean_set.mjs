import { data_set } from "./data_set.mjs";
export async function data_boolean_set(property_name, value) {
  await data_set(value_get, property_name);
  function value_get(previous) {
    let v = null;
    if (value === "1") {
      v = true;
    }
    if (value === "0") {
      v = false;
    }
    return v;
  }
}
