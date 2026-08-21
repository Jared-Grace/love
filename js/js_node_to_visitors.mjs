import { equal } from "./equal.mjs";
import { js_visit_above } from "./js_visit_above.mjs";
import { not } from "./not.mjs";
import { set_on_first } from "./set_on_first.mjs";
import { js_import_specifier_is } from "./js_import_specifier_is.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit } from "./js_visit.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_to_visitors(ast, node_search) {
  "Walks the whole file looking for one particular piece of the tree - the very object, not another one that reads the same - and hands back, for each place it is found, a record of where in the tree that was.";
  "Sameness of the object is what is asked, not sameness of what it says. A name written out twice is two objects and is not this. One object genuinely held in two places is, and those places are the whole point: something about to be moved or replaced has to be reached everywhere it is held.";
  "An import is where one object sits in two places. The name brought in and the name used are held side by side on the same import, so a walk reports the one import twice. Only the first of the two is kept.";
  "That keeping used to stand behind a test asking whether two readings of one and the same property of the import agreed, which they always did. Taking a test away that was true every time it was reached changes nothing, and it stops the next reader spending the time it took to work out that it was.";
  "It is worth saying why no narrower test is wanted in its place, because the obvious one is to ask whether the two names really are one object. An import holds two names and no more. Where they are two objects, only one of them can be the thing being looked for, so the one place is found once and there is nothing to keep only the first of; where they are one object, the one place is found twice and the keeping is exactly what is needed. So the narrower test would only ever refuse to act where acting made no difference, and asking it costs a reading nobody uses.";
  function lambda2(la) {
    function lambda3(sa) {
      function lambda(v) {
        let node = property_get(v, "node");
        if (equal(node, node_search)) {
          let add_to_list = true;
          let e = js_visit_above(v);
          let type_is = js_import_specifier_is(e);
          if (type_is) {
            let first = sa(node);
            if (not(first)) {
              add_to_list = false;
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
