import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { equal } from "./equal.mjs";
export function js_shorthand_properties_expand(ast, name) {
  arguments_assert(arguments, 2);
  ("Writes out in full every shorthand entry whose word is the one named, so");
  ("`{ marker }` becomes `{ marker: marker }` and the two roles stop being one");
  ("node. A shorthand entry is a single identifier serving as BOTH the key and");
  ("the value, so anything that rewrites the value rewrites the emitted key with");
  ("it - which is how a rename of a local silently changed what a reader");
  ("elsewhere had to ask for, on a path that only ran when something had gone");
  ("wrong anyway.");
  ("The key gets the FRESH node and the value keeps the original, because the");
  ("caller has already collected the nodes it means to rewrite: the value stays");
  ("in that collection and the new key is not in it, so the rename lands on the");
  ("value alone. Call it AFTER collecting and BEFORE rewriting.");
  ("Answers how many it wrote out, so a caller can say nothing happened.");
  let expanded = 0;
  function property_visit(visited) {
    let node = property_get(visited, "node");
    let shorthand = property_get(node, "shorthand");
    if (shorthand) {
      let key = property_get(node, "key");
      let key_name = property_get(key, "name");
      let same = equal(key_name, name);
      if (same) {
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
