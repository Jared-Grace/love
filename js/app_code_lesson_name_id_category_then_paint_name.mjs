import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { js_name_taken_is } from "./js_name_taken_is.mjs";
import { each } from "./each.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
export function app_code_lesson_name_id_category_then_paint_name(ast, maker) {
  arguments_assert(arguments, 2);
  ("Gives the collapsed title maker the name of what it now is. It was a maker handing back a painter; it is the painter itself, so a name saying it makes something is a name that has stopped being true.");
  ("Only a plainly defined one is renamed. Where the function was given to a name instead, the name the caller passes is that other name, and reaching it needs the line above rather than the function - a second shape for the sake of a handful of files, left for whoever wants it.");
  ("A file already holding the word keeps its own, since a rename that lands on a name in use would hide it.");
  let type = property_get(maker, "type");
  if (not_equal(type, "FunctionDeclaration")) {
    return false;
  }
  let taken = js_name_taken_is(ast, "paint");
  if (taken) {
    return false;
  }
  let name_before = property_path_get_2(maker, "id", "name");
  function rename(node) {
    let name = property_get(node, "name");
    if (equal(name, name_before)) {
      property_set(node, "name", "paint");
    }
  }
  ("only the words that READ the function are renamed. every identifier in the file spelling that word was renamed before, which reaches a key in an object and a property after a dot - words that only look like the name and belong to something else entirely.");
  let nodes = js_identifiers_referenced_nodes(ast);
  each(nodes, rename);
  return true;
}
