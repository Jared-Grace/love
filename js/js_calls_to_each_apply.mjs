import { js_visit_types } from "./js_visit_types.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_statements_calls_to_each } from "./js_statements_calls_to_each.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_is } from "./list_is.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function js_calls_to_each_apply(ast, names) {
  "Puts a single walk in the place of every run of side by side calls, everywhere in this tree that statements stand one after another - the top of the module and the inside of every pair of braces.";
  "The lists are gathered first and rewritten afterwards, because the gathering is a walk over the very lists being changed, and changing one part way through would leave the walk reading a list that no longer holds what it was counting on.";
  let bodies = [];
  function body_gather(v) {
    let node = property_get(v, "node");
    let body = property_get(node, "body");
    let list_of_statements_is = list_is(body);
    let known_is = list_includes(bodies, body);
    let right = not(known_is);
    let wanted_is = and(list_of_statements_is, right);
    if (wanted_is) {
      list_add(bodies, body);
    }
  }
  js_visit_types(ast, ["Program", "BlockStatement"], body_gather);
  let program_is = js_node_type_is(ast, "Program");
  if (program_is) {
    let body = property_get(ast, "body");
    let known_is = list_includes(bodies, body);
    if (not(known_is)) {
      list_add(bodies, body);
    }
  }
  function body_rewrite(body) {
    js_statements_calls_to_each(body, names);
  }
  each(bodies, body_rewrite);
}
