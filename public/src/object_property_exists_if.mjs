import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export async function object_property_exists_if(obj, property, on_exist) {
  let e = object_property_exists(obj, property);
  if (e) {
    let f_names = object_property_get(obj, property);
    await on_exist(f_names);
  }
}
