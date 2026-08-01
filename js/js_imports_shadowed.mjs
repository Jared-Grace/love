import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { js_identifier_nodes_bound_by } from "./js_identifier_nodes_bound_by.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_imports_shadowed(ast) {
  "the imports nothing in this file actually reads, because every mention of the name sits inside a scope that binds it itself. Counting mentions cannot see this — a local's own uses count as uses of the import — which is how a name shared with a local lets an import in and then keeps it there for good. The import line names itself, so its own mention is set aside before asking whether anything is left.";
  let imports = js_imports_declarations(ast);
  function unread(entry) {
    let name = property_get(entry, "name");
    let declaration = property_get(entry, "declaration");
    let reads = js_identifier_nodes_bound_by(ast, name, null);
    let naming = js_identifier_nodes_bound_by(declaration, name, null);
    let outside = list_difference(reads, naming);
    let none = list_empty_is(outside);
    return none;
  }
  let names = list_filter_map_property(imports, unread, "name");
  return names;
}
