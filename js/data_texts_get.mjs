import { data_property_get } from "./data_property_get.mjs";
export async function data_texts_get() {
  let v = await data_property_get("strings");
  return v;
}
