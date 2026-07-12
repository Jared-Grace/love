import { function_new } from "./function_new.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_new_transform(f_name, lambda$ast) {
  let declaration = await function_new(f_name);
  let output = await function_transform(f_name, lambda$ast);
  let r = {
    output,
    declaration,
  };
  return r;
}
