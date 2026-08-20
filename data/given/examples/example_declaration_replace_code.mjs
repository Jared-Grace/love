import { js_statement_replace_code } from "../../js/js_statement_replace_code.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
export const example = {
  fn: js_statement_replace_code.name,
  select: js_find_declaration_named.name,
  select_args: ["doubled"],
  args: ["let doubled = thrice(a);"],
  kind: "transform",
  title: "Replace a line, addressed by the name it binds",
  note: [
    "Two atoms at once. The address is ",
    { code: "js_find_declaration_named" },
    " — the line is named by what it makes, not by what it calls or where it ",
    "sits, which is the only address a line that calls nothing can be given. The ",
    "verb is ",
    { fn: js_statement_replace_code.name },
    ": putting a line in and taking a line out already had verbs, and changing ",
    "one is the third thing that can happen to a line. Neither half knows the ",
    "other, so this address also reaches every other transform.",
  ],
  before: `export function f(a) {
  let doubled = twice(a);
  return doubled;
}`,
  after: `export function f(a) {
  let doubled = thrice(a);
  return doubled;
}`,
};
