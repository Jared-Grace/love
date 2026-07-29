import { fn_name } from "./fn_name.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_list_calls_named } from "./js_list_calls_named.mjs";
import { list_size } from "./list_size.mjs";
import { js_html_style_set_to_helpers } from "./js_html_style_set_to_helpers.mjs";
import { subtract } from "./subtract.mjs";
export function js_code_html_style_literals_left(code, helpers) {
  "How many style properties in this source are still set by name where a named helper already stands for it.";
  "It answers by running the rewrite on a tree it then throws away, and counting how many of the calls disappeared. That is the point: the question and the fix are then the same judgment, so the count can never disagree with what the codemod would do. A second copy of the matching rules written out here to keep the check cheap is a second thing to keep in step, and the two would drift the first time either was taught something the other was not.";
  let ast = js_parse(code);
  let f_name = fn_name("html_style_set");
  let before = js_list_calls_named(ast, f_name);
  js_html_style_set_to_helpers(ast, helpers);
  let after = js_list_calls_named(ast, f_name);
  let left = subtract(list_size(before), list_size(after));
  return left;
}
