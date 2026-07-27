import { js_statement_delete } from "../../js/js_statement_delete.mjs";
import { js_function_node_find_named_node } from "../../js/js_function_node_find_named_node.mjs";
import { js_function_node_find_named } from "../../js/js_function_node_find_named.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
export const example = {
  fn: js_statement_delete.name,
  select: js_function_node_find_named_node.name,
  select_args: ["mjs_is"],
  args: [],
  kind: "transform",
  title: "Address an inner function by its name",
  note: [
    "An inner function is many lines standing for one thing, and this is the ",
    "address that treats it that way — name it and the whole of it answers. ",
    { fn: js_find_declaration_named.name },
    " cannot reach it: what a function declaration binds is not bound the way a ",
    { code: "let" },
    " binds, so the line-that-binds-a-name address looks straight past it. ",
    "The verb is the deleting one, which is the edit an inner helper most often ",
    "needs — the small named lambdas this repo is written out of outlive their one ",
    "caller constantly, and taking one out by hand means finding both of its ends.",
    " ",
    "Two functions answer to almost this name and only one of them is an address: ",
    { code: "js_function_node_find_named" },
    " hands back the walker's record of the node — where it sits, what it sits ",
    "inside — while a selector has to hand back the node itself, the way every ",
    "other address here does, or the verb it is paired with cannot find where the ",
    "node lives. The one ending in ",
    { code: "node" },
    " is the address; the other is what it is built from.",
  ],
  before: `export function f(names) {
  function mjs_is(name) {
    let ew = text_ends_with(name, ".mjs");
    return ew;
  }
  return names;
}`,
  after: `export function f(names) {
  return names;
}`,
};
