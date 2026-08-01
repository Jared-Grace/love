import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_imports_all } from "./js_imports_all.mjs";
import { list_map } from "./list_map.mjs";
export function js_import_source_nodes(ast) {
  let imports = js_imports_all(ast);
  function lambda(v) {
    let source = property_path_get_2(v, "node", "source");
    return source;
  }
  let sources = list_map(imports, lambda);
  return sources;
}
