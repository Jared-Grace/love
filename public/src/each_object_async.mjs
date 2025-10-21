import { marker } from "../../../love/public/src/marker.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each_async } from "./each_async.mjs";
export async function each_object_async(object, lambda) {
  marker("1");
  async function lambda2(property) {
    let value = object_property_get(object, property);
    await lambda(value, property);
  }
  let properties = object_properties(object);
  await each_async(properties, lambda2);
}
