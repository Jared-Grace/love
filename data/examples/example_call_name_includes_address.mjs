import { js_call_argument_named_identifier_set } from "../../js/js_call_argument_named_identifier_set.mjs";
import { js_find_call_name_includes } from "../../js/js_find_call_name_includes.mjs";
import { js_call_named_find } from "../../js/js_call_named_find.mjs";
export const example = {
  fn: js_call_argument_named_identifier_set.name,
  select: js_find_call_name_includes.name,
  select_args: ["add_first"],
  args: ["ast", "ast"],
  kind: "transform",
  title: "Address a call by part of its name",
  note: [
    "The address for when two calls in a line of work share a family name and only ",
    "the tail tells them apart. ",
    { fn: js_call_named_find.name },
    " wants the whole name, which means retyping ",
    { code: "js_flo_body_add_first" },
    " to reach it; the fragment ",
    { code: "add_first" },
    " says the same thing here and says it shorter. What it buys in brevity it ",
    "pays for in exactness — the fragment has to match one call and no other or it ",
    "refuses — so it is the address to reach for when the full name is long and ",
    "unmistakable in part.",
    " ",
    "The verb is the repointing one, because a fragment address is most useful ",
    "exactly where generated calls pile up and one of them arrived holding ",
    { code: "ast2" },
    ".",
  ],
  before: `export function f(ast, item) {
  let body_block = js_flo_body(ast);
  js_flo_body_add_first(ast2, item);
}`,
  after: `export function f(ast, item) {
  let body_block = js_flo_body(ast);
  js_flo_body_add_first(ast, item);
}`,
};
