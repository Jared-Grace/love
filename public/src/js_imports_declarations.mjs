import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { js_imports_all } from "../../../love/public/src/js_imports_all.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function js_imports_declarations(ast) {
  let vs = js_imports_all(ast);
  function lambda2(la) {
    function lambda(v) {
      let node = object_property_get(v, "node");
      let source = object_property_get(node, "source");
      let specifiers = object_property_get(node, "specifiers");
      let a = list_size_1(specifiers);
      if (not(a)) {
        return;
      }
      let a2 = js_node_type_is(source, "Literal");
      if (not(a2)) {
        return;
      }
      let value = object_property_get(source, "value");
      let a3 = text_starts_with(value, ".");
      if (not(a3)) {
        return;
      }
      let v2 = list_single(specifiers);
      let local = object_property_get(v2, "local");
      let imported = object_property_get(v2, "imported");
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
  const imports = list_adder_unique(lambda2);
  return imports;
}
