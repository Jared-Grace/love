import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_new_if_exists_not } from "../../../love/public/src/function_new_if_exists_not.mjs";
export async function function_transform_exists_ensure(f_name, lambda4) {
  await function_new_if_exists_not(f_name);
  let output = await function_transform(f_name, lambda4);
}
