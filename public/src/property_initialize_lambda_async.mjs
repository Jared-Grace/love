import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
export async function property_initialize_lambda_async(
  object,
  property_name,
  lambda,
) {
  const _not = property_exists_not(object, property_name);
  if (_not) {
    let value_set = lambda();
    property_set(object, property_name, value_set);
  }
  let value = await property_get(object, property_name);
  return value;
}
