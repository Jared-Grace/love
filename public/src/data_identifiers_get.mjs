import {data_property_get} from "./data_property_get.mjs";
export async function data_identifiers_get() {
  let v = await data_property_get("identifiers");
  return v;
}
