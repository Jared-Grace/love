import { js_list_type } from "./js_list_type.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_find } from "./list_find.mjs";
import { property_get } from "./property_get.mjs";
export function js_find_declaration_named(ast, name) {
  ("The line that makes a value, addressed by the name it makes. Every step of a");
  ("normalized function is a value bound to a name somebody chose, so that name is");
  ("already the most readable address in the file — and unlike a position or a");
  ("node type, it survives the lines around it moving.");
  ("It is the address the other selectors cannot reach: a line that calls nothing");
  ("has no call to name, but it still binds something.");
  let vs = js_list_type(ast, "VariableDeclaration");
  function named_is(v) {
    let node = property_get(v, "node");
    let statements = [node];
    let names = js_statements_declared_names_direct(statements);
    let includes = list_includes(names, name);
    return includes;
  }
  let only = list_find(vs, named_is);
  let found = property_get(only, "node");
  return found;
}
