import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_cache_name } from "../../../love/public/src/function_cache_name.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_cache_refresh(f_name) {
  marker("1");
  let v3 = await function_cache_name(f_name);
  let f_name_cache = object_property_get(v3, "f_name_cache");
  let unaliased = object_property_get(v3, "unaliased");
  let parsed = object_property_get(v3, "parsed");
}
