import { data_boolean_set } from "../../../love/public/src/data_boolean_set.mjs";
export async function data_watch_set(v) {
  const property_name = "watch";
  await data_boolean_set(property_name, v);
}
