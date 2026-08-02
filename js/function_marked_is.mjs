import { js_call_callee_name_equal } from "./js_call_callee_name_equal.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { null_is } from "./null_is.mjs";
export async function function_marked_is(f_name, mark_name) {
  "Whether the named function carries the given mark as a call in its body, which is the only way a mark is ever written.";
  "It used to ask which names the body reads, and that says yes to every function that merely spells the mark - the one that lists the marks, the one that places them, the one that reads them. None of those claims anything about itself, so the machinery was reporting itself as marked, and the check built on this quietly excused those files from the very gate it feeds. The function beside this one had the right reading written down and the warning in its prose the whole time; what was missing was that the general reader did not use it.";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let statements = js_function_declaration_to_block_body(declaration);
  for (let statement of statements) {
    let call = js_statement_call_any_get(statement);
    let missing = null_is(call);
    if (missing) {
      continue;
    }
    let marked = js_call_callee_name_equal(call, mark_name);
    if (marked) {
      return true;
    }
  }
  return false;
}
