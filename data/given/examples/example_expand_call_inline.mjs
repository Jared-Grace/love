import { js_expand_selects } from "../../js/js_expand_selects.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_expand_selects.name,
  select: js_statement_find_call_named.name,
  select_args: ["js_flo_path"],
  args: [],
  kind: "transform",
  title: "Put a called function's body where the call was",
  note: [
    "The one verb here that reads a second function. Everything else works from ",
    "what is in front of it; this one takes the name at the call, goes and reads ",
    "that function out of the repo, and puts its body where the call stood. ",
    "Watch what has to happen for that to be safe: the parameters take the names ",
    "the call used for them, so ",
    { code: "ast" },
    " becomes whatever the caller passed; anything else the body binds is renamed ",
    "if a name here already means something; and the ",
    { code: "return" },
    " turns into the assignment the call was feeding, since there is nothing left ",
    "to return to.",
    " ",
    "It is the undoing of extracting a span into a function, which is how a ",
    "helper that turned out to be worth one line gets folded back in — and one ",
    "half of that pair is checked here and the other still is not, because ",
    "extracting writes a new file and nothing in this corpus can yet watch a ",
    "transform that touches the folder around it.",
  ],
  before: `export function f(ast) {
  let p = js_flo_path(ast);
  return p;
}`,
  after: `export function f(ast) {
  let f_name = js_flo_name(ast);
  let f_path = function_name_to_path_relative(f_name);
  let p = f_path;
  return p;
}`,
};
