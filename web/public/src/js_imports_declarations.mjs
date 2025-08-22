import { marker } from "./marker.mjs";
import { not } from "./not.mjs";
import { js_imports_all } from "./js_imports_all.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_single } from "./list_single.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each } from "./each.mjs";
export function js_imports_declarations(ast) {
  marker("1");
  let vs = js_imports_all(ast);
  function lambda2(la) {
    function lambda(v) {
      let { node } = v;
      let { specifiers, source } = node;
      let a = list_size_1(specifiers);
      if (not(a)) {
        return;
      }
      let a2 = js_node_type_is(source, "Literal");
      if (not(a2)) {
        return;
      }
      let { value } = source;
      let a3 = string_starts_with(value, ".");
      if (not(a3)) {
        return;
      }
      let specifier = list_single(specifiers);
      let { imported, local } = specifier;
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
