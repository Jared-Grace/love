import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { js_imports_all } from "./js_imports_all.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_single } from "./list_single.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each } from "./each.mjs";
export function js_imports_declarations(ast) {
  let vs = js_imports_all(ast);
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      let source = property_get(node, "source");
      let specifiers = property_get(node, "specifiers");
      let a = list_size_1(specifiers);
      if (not(a)) {
        return;
      }
      let a2 = js_node_type_is(source, "Literal");
      if (not(a2)) {
        return;
      }
      let value = property_get(source, "value");
      let a3 = text_starts_with(value, ".");
      if (not(a3)) {
        return;
      }
      let v2 = list_single(specifiers);
      let local = property_get(v2, "local");
      let imported = property_get(v2, "imported");
      let both = [imported, local];
      let mapped = list_map_property(both, "name");
      let unique = list_unique(mapped);
      ("the names should be the same");
      let name = list_single(unique);
      la({
        name,
        declaration: node,
      });
    }
    each(vs, lambda);
  }
  let imports = list_adder_unique(lambda2);
  return imports;
}
