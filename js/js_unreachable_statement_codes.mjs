import { js_unreachable_statements } from "./js_unreachable_statements.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
export function js_unreachable_statement_codes(ast) {
  "The lines of this file that never run, written back out as the code they were, so that a reader receives something they can read rather than parsed pieces.";
  "The sweep across the whole repo hands whatever it finds straight to whoever asked, and parsed pieces printed out are pages of nesting nobody can see a line of code in.";
  let dead = js_unreachable_statements(ast);
  let codes = list_map(dead, js_unparse);
  return codes;
}
