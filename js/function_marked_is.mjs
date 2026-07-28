import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export async function function_marked_is(f_name, mark_name) {
  "Whether the named function carries the given mark as a call in its body, which is the only way a mark is ever written.";
  "It used to ask which names the body reads, and that says yes to every function that merely spells the mark - the one that lists the marks, the one that places them, the one that reads them. None of those claims anything about itself, so the machinery was reporting itself as marked, and the check built on this quietly excused those files from the very gate it feeds. The function beside this one had the right reading written down and the warning in its prose the whole time; what was missing was that the general reader did not use it.";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let block = property_get(declaration, "body");
  let statements = js_block_body_get(block);
  for (let statement of statements) {
    let call = js_statement_call_any_get(statement);
    let missing = null_is(call);
    if (missing) {
      continue;
    }
    let name = js_call_callee_name_try(call);
    let marked = equal(name, mark_name);
    if (marked) {
      return true;
    }
  }
  return false;
}
