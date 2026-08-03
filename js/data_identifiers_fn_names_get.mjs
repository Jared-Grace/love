import { data_property_get } from "./data_property_get.mjs";
export async function data_identifiers_fn_names_get() {
  "Every place a function name is written out as text rather than called, gathered ahead of time so a rename can find the spellings a search for calls would miss.";
  let v = await data_property_get("identifiers_fn_names");
  return v;
}
