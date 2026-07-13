import { js_imports_all } from "./js_imports_all.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function js_import_source_nodes(ast) {
  let imports = js_imports_all(ast);
  function lambda(v) {
    let node = property_get(v, "node");
    let source = property_get(node, "source");
    return source;
  }
  let sources = list_map(imports, lambda);
  return sources;
}
