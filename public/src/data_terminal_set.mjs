import { marker } from "../../../love/public/src/marker.mjs";
import { data_boolean_set } from "../../../love/public/src/data_boolean_set.mjs";
export async function data_terminal_set(v) {
  marker("1");
  const property_name = "terminal";
  await data_boolean_set(property_name, v);
}
