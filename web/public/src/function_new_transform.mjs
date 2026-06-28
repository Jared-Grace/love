import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_new_transform(f_name, lambda$ast) {
  let declaration = await function_new(f_name);
  let transform_result = await function_transform(f_name, lambda$ast);
  let output = property_get(transform_result, "output");
  let r = {
    output,
    declaration,
  };
  return r;
}
