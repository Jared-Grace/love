import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { js_name_taken_is } from "./js_name_taken_is.mjs";
import { js_visit_identifiers_nodes } from "./js_visit_identifiers_nodes.mjs";
export function app_code_lesson_name_id_category_then_paint_name(ast, maker) {
  arguments_assert(arguments, 2);
  ("Gives the collapsed title maker the name of what it now is. It was a maker handing back a painter; it is the painter itself, so a name saying it makes something is a name that has stopped being true.");
  ("Only a plainly defined one is renamed. Where the function was given to a name instead, the name the caller passes is that other name, and reaching it needs the line above rather than the function - a second shape for the sake of a handful of files, left for whoever wants it.");
  ("A file already holding the word keeps its own, since a rename that lands on a name in use would hide it.");
  let type = property_get(maker, "type");
  if (type !== "FunctionDeclaration") {
    return false;
  }
  let taken = js_name_taken_is(ast, "paint");
  if (taken) {
    return false;
  }
  let id = property_get(maker, "id");
  let name_before = property_get(id, "name");
  function rename(node) {
    let name = property_get(node, "name");
    if (name === name_before) {
      property_set(node, "name", "paint");
    }
  }
  js_visit_identifiers_nodes(ast, rename);
  return true;
}
