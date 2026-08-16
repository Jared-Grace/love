import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { list_add } from "./list_add.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
export function js_target_names_all(target) {
  arguments_assert(arguments, 1);
  ("Every name written anywhere in a place that is being written to, the word after a dot along with the one before it.");
  ("It gathers more names than were really written, on purpose. A caller reading this way is asking whether a name it cares about could possibly have changed, and answering yes too often only makes that caller more careful, while answering no too often would make it wrong.");
  let names = [];
  function named(w) {
    let name = property_path_get_2(w, "node", "name");
    list_add(names, name);
  }
  js_visit_types(target, ["Identifier"], named);
  return names;
}
