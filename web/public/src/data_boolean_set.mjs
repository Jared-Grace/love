import { data_path } from "../../../love/public/src/data_path.mjs";
import { data_set } from "../../../love/public/src/data_set.mjs";
export async function data_boolean_set(property_name, value) {
  let d_path = data_path();
  await data_set(value_get, property_name, d_path);
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
