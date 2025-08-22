import { function_transform } from "./function_transform.mjs";
import { function_new } from "./function_new.mjs";
export async function function_new_transform(f_name, lambda$ast) {
  await function_new(f_name);
  let v = await function_transform(f_name, lambda$ast);
  return v;
}
