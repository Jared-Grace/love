import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_strings_get() {
  marker("1");
  let v = await data_property_get("strings");
  return v;
}
