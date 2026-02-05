import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
export async function data_terminal_get() {
  const property_name = "terminal";
  let t = await data_property_get(property_name);
  return t;
}
