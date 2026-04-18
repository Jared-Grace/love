import { property_initialize_lambda_info_async } from "../../../love/public/src/property_initialize_lambda_info_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function property_initialize_lambda_async(
  object,
  property_name,
  lambda,
) {
  let r = await property_initialize_lambda_info_async(
    object,
    property_name,
    lambda,
  );
  let value = property_get(r, "value");
  return value;
}
