import { function_transform } from "./function_transform.mjs";
import { js_declaration_unused_to_expression } from "./js_declaration_unused_to_expression.mjs";
export async function function_declarations_unused_clear(f_name) {
  "drop the lines in one function that name a value nothing goes on to read";
  "a line whose value was only a read goes altogether; one whose value did work of its own stays as a bare line, so the work still happens and only the name nobody wanted is gone. the pass deciding which is which already existed and nothing at the seam could aim it, so a dead line could only be cleared by hand";
  let r = await function_transform(f_name, js_declaration_unused_to_expression);
  return r;
}
