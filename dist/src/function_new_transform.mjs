import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
export async function function_new_transform(f_name, lambda$ast) {
  await function_new(f_name);
  let output = await function_transform(f_name, lambda$ast);
  return output;
}
