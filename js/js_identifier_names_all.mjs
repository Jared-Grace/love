import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifier_names_all(ast) {
  "Every word written as a name anywhere inside, once each, whether it is read, written, declared, or standing as the key of something";
  "Nothing is judged about what a word is doing there. That is what makes it useful to a caller that already has a set of names in hand and wants to know which of them the code so much as mentions - the judging is the part that has been getting the answer wrong, and a caller narrowing a set it already trusts does not need it";
  "It is the wide reading, so it will name a word that is only ever a key. A caller crossing it with a set of real names is what keeps that from mattering";
  function lambda(la) {
    function each(v) {
      let name = property_path_get_2(v, "node", "name");
      la(name);
    }
    js_visit_identifiers(ast, each);
  }
  let names = list_adder_unique(lambda);
  return names;
}
