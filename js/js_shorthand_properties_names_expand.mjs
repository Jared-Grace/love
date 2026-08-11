import { property_equals_any } from "./property_equals_any.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_shorthand_properties_names_expand(ast, names) {
  arguments_assert(arguments, 2);
  ("Writes out in full every shorthand entry whose word is any of the ones named, so");
  ("`{ marker }` becomes `{ marker: marker }` and the two roles stop being one node.");
  ("The one-name sibling, asked once for each of a list of names. It exists because asking");
  ("one at a time walks the whole tree again for every word, and the caller with the most");
  ("words to ask about is the one blanking a run of statements out of a function: measured");
  ("2026-08-11 over this repo, fifteen thousand runs times seven private names each came to");
  ("one million one hundred thousand walks, sixty-two of the ninety seconds that reading");
  ("every run of four statements cost. One walk answers all of them, because a single entry");
  ("has a single word for its key, so no two of the names can want the same node.");
  ("The key gets the FRESH node and the value keeps the original, because the caller has");
  ("already collected the nodes it means to rewrite: the value stays in that collection and");
  ("the new key is not in it, so the rename lands on the value alone. Call it AFTER");
  ("collecting and BEFORE rewriting.");
  ("Answers how many it wrote out, so a caller can say nothing happened.");
  let expanded = 0;
  function property_visit(visited) {
    let node = property_get(visited, "node");
    let shorthand = property_get(node, "shorthand");
    if (shorthand) {
      let key = property_get(node, "key");
      let same = property_equals_any(key, "name", names);
      if (same) {
        let name = property_get_name(key);
        let fresh = js_identifier_expression(name);
        property_set(node, "key", fresh);
        property_set(node, "shorthand", false);
        expanded = add(expanded, 1);
      }
    }
  }
  js_visit_type(ast, "Property", property_visit);
  return expanded;
}
