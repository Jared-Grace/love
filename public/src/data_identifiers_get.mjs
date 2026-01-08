import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
export async function data_identifiers_get() {
  const property = "identifiers";
  let v = await data_property_get(property);
  return v;
}
