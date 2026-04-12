import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_new_open } from "../../../love/public/src/function_new_open.mjs";
export async function function_new_transform_open(f_name, lambda$ast) {
  await function_new_open(f_name);
  let output = await function_transform(f_name, lambda$ast);
  return output;
}
