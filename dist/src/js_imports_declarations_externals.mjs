import { property_get } from "../../../love/public/src/property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { js_imports_all } from "../../../love/public/src/js_imports_all.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function js_imports_declarations_externals(ast) {
  let vs = js_imports_all(ast);
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      let source = property_get(node, "source");
      let specifiers = property_get(node, "specifiers");
      let a2 = js_node_type_is(source, "Literal");
      if (not(a2)) {
        return;
      }
      let source_value = property_get(source, "value");
      let a3 = text_starts_with(source_value, ".");
      if (a3) {
        return;
      }
      la({
        source_value,
        declaration: node,
      });
    }
    each(vs, lambda);
  }
  const externals = list_adder_unique(lambda2);
  return externals;
}
