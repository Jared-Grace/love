import { data_property_get } from "./data_property_get.mjs";
export async function data_terminal_get() {
  let property_name = "terminal";
  let t = await data_property_get(property_name);
  return t;
}
