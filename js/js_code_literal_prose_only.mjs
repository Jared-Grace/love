import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_string_site_labels } from "./js_string_site_labels.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { equal } from "./equal.mjs";
export function js_code_literal_prose_only(code, literal) {
  arguments_assert(arguments, 2);
  ("Whether a file holds a written word only in its own account of itself.");
  ("A function's explanation is a real statement here rather than a stripped");
  ("comment, so a report that looks for a spelling anywhere in a file finds the");
  ("sentence that merely mentions it and calls that a copy of the constant.");
  ("It is not one, and it is the one kind of site that can never be repaired: a");
  ("call cannot stand where a sentence stands, so the report would ask forever for");
  ("something nobody can do.");
  let ast = js_parse(code);
  let labels = js_string_site_labels(ast, literal);
  let size = list_size(labels);
  let one = equal(size, 1);
  if (one) {
    let only = list_first(labels);
    let prose_is = equal(only, "ExpressionStatement");
    return prose_is;
  }
  return false;
}
