import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function object_map_generic_async(object, lambda, mapper_lambda) {
  async function lambda2(property) {
    let value = property_get(object, property);
    await lambda(value, property);
  }
  let properties = properties_get(object);
  let mapped = await mapper_lambda(properties, lambda2);
  return mapped;
}
