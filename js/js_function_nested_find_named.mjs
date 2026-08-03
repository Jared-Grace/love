import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_function_nodes_visitors } from "./js_list_function_nodes_visitors.mjs";
import { js_flo } from "./js_flo.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_types_includes } from "./js_node_types_includes.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
export function js_function_nested_find_named(ast, name) {
  arguments_assert(arguments, 2);
  ("The function written inside the exported one under the name you give, however deep it sits.");
  ("Addressed by its own name rather than by where it stands, because a closure keeps its name while every line around it moves - and because the thing worth reaching for is nearly always already named. Most of a long function's size sits inside a closure written beside the lines that use it, and a span cannot reach into one: the span extractor sees the whole closure as a single statement and can only wrap it up again.");
  ("The exported function is skipped so that a file whose inner function shares its name still finds the inner one - and so that asking for the outer name is an error rather than a move that would empty the file.");
  let visitors = js_list_function_nodes_visitors(ast);
  let outer = js_flo(ast);
  let found = null;
  for (let v of visitors) {
    let node = property_get(v, "node");
    let same = equal(node, outer);
    if (same) {
      continue;
    }
    let declaration_is = js_node_types_includes(node, "FunctionDeclaration");
    if (not(declaration_is)) {
      continue;
    }
    let named = js_function_declaration_name(node);
    let matched = equal(named, name);
    if (matched) {
      found = node;
      break;
    }
  }
  null_not_is_assert_json(found, {
    hint: "no function written inside this one is declared under that word. Would you like to check the spelling, or name one the function really writes?",
    name,
  });
  return found;
}
