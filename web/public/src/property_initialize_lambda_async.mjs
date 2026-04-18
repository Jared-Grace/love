import { property_initialize_lambda_info_async } from "../../../love/public/src/property_initialize_lambda_info_async.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
export async function property_initialize_lambda_async(
  object,
  property_name,
  lambda,
) {
  const exists_not = property_exists_not(object, property_name);
  if (exists_not) {
    let value_set = lambda();
    property_set(object, property_name, value_set);
  }
  let value = await property_get(object, property_name);
  return value;
  async function lambda3() {}
  let r = await property_initialize_lambda_info_async(
    object2,
    property_name2,
    lambda3,
  );
}
