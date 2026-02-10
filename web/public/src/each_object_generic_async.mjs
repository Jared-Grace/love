import { object_properties_get } from "../../../love/public/src/object_properties_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function each_object_generic_async(object, lambda, each_lambda) {
  async function lambda2(property) {
    let value = object_property_get(object, property);
    await lambda(value, property);
  }
  let properties = object_properties_get(object);
  await each_lambda(properties, lambda2);
}
