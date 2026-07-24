import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
export function js_imports_source_rename(ast, source_before, source_after) {
  let imports_declarations = js_imports_declarations(ast);
  function lambda(i) {
    let declaration = property_get(i, "declaration");
    let source = property_get(declaration, "source");
    let value = property_get(source, "value");
    let b = equal(value, source_before);
    if (b) {
      let code = js_code_string(source_after);
      let expression = js_parse_expression(code);
      property_set(declaration, "source", expression);
    }
  }
  each(imports_declarations, lambda);
}
