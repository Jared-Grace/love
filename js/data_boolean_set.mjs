import { equal } from "./equal.mjs";
import { data_path } from "./data_path.mjs";
import { data_set } from "./data_set.mjs";
export async function data_boolean_set(property_name, value) {
  let d_path = data_path();
  await data_set(value_get, property_name, d_path);
  function value_get(previous) {
    let v = null;
    if (equal(value, "1")) {
      v = true;
    }
    if (equal(value, "0")) {
      v = false;
    }
    return v;
  }
}
