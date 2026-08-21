import { equal } from "./equal.mjs";
import { js_visit_above } from "./js_visit_above.mjs";
import { not } from "./not.mjs";
import { set_on_first } from "./set_on_first.mjs";
import { object_properties_equal } from "./object_properties_equal.mjs";
import { js_import_specifier_is } from "./js_import_specifier_is.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit } from "./js_visit.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_to_visitors(ast, node_search) {
  "Walks the whole file looking for one particular piece of the tree - the very object, not another one that reads the same - and hands back, for each place it is found, a record of where in the tree that was.";
  "Sameness of the object is what is asked, not sameness of what it says. A name written out twice is two objects and is not this. One object genuinely held in two places is, and those places are the whole point: something about to be moved or replaced has to be reached everywhere it is held.";
  "An import is where one object sits in two places. The name brought in and the name used are held side by side on the same import, so a walk reports the one import twice. Only the first of the two is kept.";
  "The test guarding that keeping reads the same property of the import twice over and asks whether the two readings agree, which they always do. So it keeps only the first of every import rather than only of the ones where the two names really are one object. That is written down rather than mended, because mending it changes what is handed back, and whoever wants it mended should be the one who knows which of the two answers they wanted.";
  function lambda2(la) {
    function lambda3(sa) {
      function lambda(v) {
        let node = property_get(v, "node");
        if (equal(node, node_search)) {
          let add_to_list = true;
          let e = js_visit_above(v);
          let type_is = js_import_specifier_is(e);
          if (type_is) {
            let eq = object_properties_equal(e, ["imported", "imported"]);
            if (eq) {
              let first = sa(node);
              if (not(first)) {
                add_to_list = false;
              }
            }
          }
          if (add_to_list) {
            la(v);
          }
        }
      }
      js_visit(ast, lambda);
    }
    set_on_first(lambda3);
  }
  let matches = list_adder(lambda2);
  return matches;
}
