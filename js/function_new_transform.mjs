import { function_new } from "./function_new.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_new_transform(f_name, lambda$ast) {
  "Declares a function that does not exist yet and shapes its body with the given transform, in one step, so a new unit never has to be written empty and then found again.";
  let declaration = await function_new(f_name);
  let output = await function_transform(f_name, lambda$ast);
  let r = {
    output,
    declaration,
  };
  return r;
}
