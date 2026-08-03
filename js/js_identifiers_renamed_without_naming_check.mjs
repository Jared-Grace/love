import { fn_name } from "./fn_name.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function js_identifiers_renamed_without_naming_check(ast) {
  "The readers a piece of code walks every word with, where it also writes over a word and never asks which of those words merely names something. Empty when there is nothing wrong.";
  "Some readers hand back every word in the tree, and a word after a dot or standing as the key of an entry looks exactly like a variable to them. Writing over one of those asks an object for a name it does not have, and the answer is nothing rather than an error, so the file goes on running and quietly does the wrong thing. That has happened three times: a compression library lost compressToUTF16, a short entry in an object had its key carried off with its value, and Math.abs would have become Math.absolute the moment that function's name moved.";
  "So a piece of code may do any two of these three things. It is walking every word and writing over one that makes it a renamer, and a renamer has to ask which words name a value before it writes.";
  ("Asking counts as asking however it is spelled: reading the naming words to leave alone, reading the referencing words to keep, or writing a short entry out in full so its key stops being its value too. Any one of those means somebody has looked at the question here.");
  let names = js_identifiers_names(ast);
  let broad = [
    fn_name("js_visit_identifiers"),
    fn_name("js_visit_identifiers_nodes"),
    fn_name("js_identifiers"),
  ];
  let walked = list_intersection(names, broad);
  if (list_empty_is(walked)) {
    return [];
  }
  let over_writers = [
    fn_name("property_set"),
    fn_name("property_set_if_equals_curried_right_3"),
  ];
  let written = list_intersection(names, over_writers);
  if (list_empty_is(written)) {
    return [];
  }
  let askers = [
    fn_name("js_identifiers_naming_nodes"),
    fn_name("js_identifiers_referenced_nodes"),
    fn_name("js_shorthand_properties_expand"),
  ];
  let asked = list_intersection(names, askers);
  let anybody_asked = list_empty_not_is(asked);
  if (anybody_asked) {
    return [];
  }
  return walked;
}
