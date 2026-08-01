import { property_equals } from "./property_equals.mjs";
import { js_expression_string } from "./js_expression_string.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export function js_imports_source_rename(ast, source_before, source_after) {
  let imports_declarations = js_imports_declarations(ast);
  function lambda(i) {
    let declaration = property_get(i, "declaration");
    let source = property_get(declaration, "source");
    let b = property_equals(source, "value", source_before);
    if (b) {
      let expression = js_expression_string(source_after);
      property_set(declaration, "source", expression);
    }
  }
  each(imports_declarations, lambda);
}
