import { js_select_apply } from "./js_select_apply.mjs";
import { js_find_return } from "./js_find_return.mjs";
import { js_statement_return_argument_set } from "./js_statement_return_argument_set.mjs";
export async function js_find_return_argument_set(ast, code) {
  ("One name for one pairing, kept because a caller already asks for it by name.");
  ("The work is now two pieces that each stand alone, joined the ordinary way, so");
  ("this is a convenience rather than a third thing to maintain.");
  let select_args = [];
  let apply_args = [code];
  await js_select_apply(
    ast,
    js_find_return,
    select_args,
    js_statement_return_argument_set,
    apply_args,
  );
}
