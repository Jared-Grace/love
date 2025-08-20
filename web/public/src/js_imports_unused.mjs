import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { js_identifiers_named_count } from "./js_identifiers_named_count.mjs";
import { log } from "./log.mjs";
import { counter } from "./counter.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { each } from "./each.mjs";
import { js_imports } from "./js_imports.mjs";
import { marker } from "./marker.mjs";
export function js_imports_unused(ast) {
  marker("1");
  let imports = js_imports_declarations(ast);
  function lambda(i) {$g$i$name$declaration
    let count_import = js_identifiers_named_count(ast, i_name);
    log(count_import);
  }
  each(imports, lambda);
}
