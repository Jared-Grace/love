import { js_function_declaration_unused_remove } from "./js_function_declaration_unused_remove.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_declaration_unused_to_expression } from "./js_declaration_unused_to_expression.mjs";
export async function function_declarations_unused_clear(f_name) {
  "drop the lines in one function that name a value nothing goes on to read";
  "a line whose value was only a read goes altogether; one whose value did work of its own stays as a bare line, so the work still happens and only the name nobody wanted is gone. the pass deciding which is which already existed and nothing at the seam could aim it, so a dead line could only be cleared by hand";
  "two passes rather than one, because a name can be bound to a value or bound to a function and only the first was ever handled here. a sweep cleared two hundred and thirty six unread names across the repo and stopped on three, and all three were the same shape: a function written inside another one that nothing calls. one pass reaching one of the two kinds reads to the caller as a repair that refused, which is the most expensive kind of quiet";
  "both act on the same ast in turn rather than on two readings of the file, so a helper that only the dropped line called is gone by the time the second pass counts the names";
  function lambda(ast) {
    js_declaration_unused_to_expression(ast);
    js_function_declaration_unused_remove(ast);
  }
  let r = await function_transform(f_name, lambda);
  return r;
}
