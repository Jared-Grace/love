import { js_call_argument_named_identifier_set } from "../../js/js_call_argument_named_identifier_set.mjs";
import { js_call_named_find } from "../../js/js_call_named_find.mjs";
export const example = {
  fn: js_call_argument_named_identifier_set.name,
  select: js_call_named_find.name,
  select_args: ["js_flo_body"],
  args: ["ast", "ast"],
  kind: "transform",
  title: "Point a generated call's argument at a local, by name",
  note: [
    "Two names and nothing to work out: the argument named as ",
    { code: "js_flo_body" },
    " knows it, and the local named as this function knows it. A call written ",
    "from the callee's own parameters arrives with those names in it — here the ",
    "uniquifier chose ",
    { code: "ast2" },
    " to avoid colliding with a name already taken — and this is how the wrong ",
    "ones get pointed at what was meant. It matters beyond convenience: an ",
    "argument that must be a bare name can be given a standing approval, and one ",
    "holding source text never can, because the approval would cover everything ",
    "the text could say.",
  ],
  before: `export function f(ast, wanted) {
  let body_block = js_flo_body(ast2);
}`,
  after: `export function f(ast, wanted) {
  let body_block = js_flo_body(ast);
}`,
};
