import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
export async function property_initialize_lambda_info_async(
  object,
  property_name,
  lambda,
) {
  let exists = property_exists(object, property_name);
  if (not(exists)) {
    let value_set = lambda();
    property_set(object, property_name, value_set);
  }
  let value = await property_get(object, property_name);
  let r = {
    value,
    exists,
  };
  return r;
}
