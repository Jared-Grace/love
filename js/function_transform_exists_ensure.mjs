import { function_transform } from "./function_transform.mjs";
import { function_new_if_exists_not } from "./function_new_if_exists_not.mjs";
export async function function_transform_exists_ensure(f_name, lambda$ast) {
  await function_new_if_exists_not(f_name);
  let output = await function_transform(f_name, lambda$ast);
}
