import { data_boolean_set } from "./data_boolean_set.mjs";
export async function data_watch_set(v) {
  const property_name = "watch";
  await data_boolean_set(property_name, v);
}
