import { js_visit_type } from "./js_visit_type.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_single } from "./list_single.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_type } from "./js_type.mjs";

export function js_imports(ast) {
  js_type  
  return list_adder_unique((la) => {
    js_visit_type(ast, "ImportDeclaration", (v) => {
      let { node } = v;
      let { specifiers, source } = node;
      if (!list_size_1(specifiers)) {
        return;
      }
      if (!js_node_type_is(source, "Literal")) {
        return;
      }
      let { value } = source;
      if (!string_starts_with(value, ".")) {
        return;
      }
      let specifier = list_single(specifiers);
      let { imported, local } = specifier;
      let both = [imported, local];
      let mapped = list_map_property(both, "name");
      let unique = list_unique(mapped);
      ("the names should be the same");
      let name = list_single(unique);
      la(name);
    });
  });
}
