import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { js_import_source_nodes } from "./js_import_source_nodes.mjs";
import { property_starts_with } from "./property_starts_with.mjs";
export function js_imports_relative_paths(ast) {
  "The files an import line names by where they sit rather than by a package name - every source written starting with a dot, given back as written";
  "A package name is left out because nothing here can say where it lives; a dotted path names a place on disk and so can be looked for.";
  let sources = js_import_source_nodes(ast);
  function dotted(source) {
    let starts = property_starts_with(source, "value", ".");
    return starts;
  }
  let paths = list_filter_map_property(sources, dotted, "value");
  return paths;
}
