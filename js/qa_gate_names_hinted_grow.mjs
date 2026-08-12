import { property_in_list } from "./property_in_list.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function qa_gate_names_hinted_grow(hinted, declarators) {
  "Grow a set of names backwards through the lines that filled them, until nothing new arrives. Changes the list it is handed.";
  "A name known to reach a hint was filled by some line, and every name that line read reaches the hint too - that is the whole step, and repeating it is what makes a name three lines away from the hint as findable as one written in it.";
  "It goes round again after every addition rather than once down the list, because the lines are in the order somebody wrote them and a value can be built from a value declared below where the hint is written.";
  let growing = true;
  while (growing) {
    growing = false;
    for (let declarator of declarators) {
      let id = property_get(declarator, "id");
      let bound_hinted_is = property_in_list(id, "name", hinted);
      if (not(bound_hinted_is)) {
        continue;
      }
      let init = property_get(declarator, "init");
      if (equal(init, null)) {
        continue;
      }
      let identifiers = js_list_type_nodes(init, "Identifier");
      for (let identifier of identifiers) {
        let named = property_get(identifier, "name");
        let known_is = list_includes(hinted, named);
        if (known_is) {
          continue;
        }
        list_add(hinted, named);
        growing = true;
      }
    }
  }
}
