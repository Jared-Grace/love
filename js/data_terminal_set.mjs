import { data_boolean_set } from "./data_boolean_set.mjs";
export async function data_terminal_set(v) {
  let property_name = "terminal";
  await data_boolean_set(property_name, v);
}
