import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { property_starts_with } from "./property_starts_with.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
import { not } from "./not.mjs";
export function js_imports_relative_named(ast) {
  "Each name an import line asks a neighbouring file for, beside the place that file was named by - one entry per name, so a line asking for several gives several";
  "Only lines naming a place are read. A package cannot be looked in from here, so nothing could be said about what it does or does not give out.";
  "A whole-module import and a default one are both passed over: neither asks for a name the other file wrote, so neither can be checked against what that file gives out.";
  let nodes = js_list_type_nodes(ast, "ImportDeclaration");
  function asked_of(node) {
    let source = property_get(node, "source");
    let dotted = property_starts_with(source, "value", ".");
    if (not(dotted)) {
      let none = [];
      return none;
    }
    let path = property_get(source, "value");
    let specifiers = property_get(node, "specifiers");
    function named(specifier) {
      let by_name = js_node_type_is(specifier, "ImportSpecifier");
      if (not(by_name)) {
        let skip = [];
        return skip;
      }
      let name = property_path_get_2(specifier, "imported", "name");
      let one = [
        {
          path,
          name,
        },
      ];
      return one;
    }
    let asked = list_map_squash(specifiers, named);
    return asked;
  }
  let entries = list_map_squash(nodes, asked_of);
  return entries;
}
