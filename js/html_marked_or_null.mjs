import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_marked_or_null(root, name) {
  "The one box inside this page that carries the named mark, and nothing at all when no box carries it.";
  "BESPOKE (querySelector), do NOT auto-canonicalize";
  "NOTHING IS THE ORDINARY ANSWER and not a failure. A mark says which kind of page this is, so a page built the other way simply has no box wearing it - and a caller reads the answer as which of the two it is standing on, rather than as something having gone wrong.";
  arguments_assert(arguments, 2);
  let element = html_component_element_get(root);
  let selector = text_combine_multiple(["[", name, "]"]);
  let found = element.querySelector(selector);
  let none = null_is(found);
  if (none) {
    return null;
  }
  let marked = html_component_wrap(found);
  return marked;
}
