import { js_call_arguments_same_names_set } from "../../js/js_call_arguments_same_names_set.mjs";
import { js_call_named_find } from "../../js/js_call_named_find.mjs";
import { js_call_argument_named_identifier_set } from "../../js/js_call_argument_named_identifier_set.mjs";
import { js_block_call_add } from "../../js/js_block_call_add.mjs";
export const example = {
  fn: js_call_arguments_same_names_set.name,
  select: js_call_named_find.name,
  select_args: ["js_block_prose_add"],
  args: [],
  kind: "transform",
  title: "Finish a generated call in one command",
  note: [
    { fn: js_block_call_add.name },
    " writes a call from the named function's own parameters, and uniquifies ",
    "every name that collides with one the calling function already binds — so a ",
    "helper wired into a function whose parameters are named the same arrives ",
    "reading ",
    { code: "ast2" },
    ", ",
    { code: "selects2" },
    ", ",
    { code: "sentence2" },
    ", none of which anything binds.",
    " ",
    "Pointing those back was one ",
    { fn: js_call_argument_named_identifier_set.name },
    " per argument, and the same loop ran after every generated call — which is ",
    "the shape this repo reads as a missing command rather than as work.",
    " ",
    "It takes no arguments at all, because nothing here is a choice: the called ",
    "function is asked what its parameters are, the calling one what it binds, ",
    "and every name on both lists is pointed at itself. A parameter the caller ",
    "has no binding for is left exactly as it stands, so what the command cannot ",
    "know it does not touch.",
  ],
  before: `export function f(ast, selects, sentence) {
  js_block_prose_add(ast2, selects2, sentence2);
}`,
  after: `export function f(ast, selects, sentence) {
  js_block_prose_add(ast, selects, sentence);
}`,
};
