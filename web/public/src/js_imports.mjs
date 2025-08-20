import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { not } from "./not.mjs";
import { js_imports_all } from "./js_imports_all.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_single } from "./list_single.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_type } from "./js_type.mjs";
import { each } from "./each.mjs";
export function js_imports(ast) {
  let imports = js_imports_declarations(ast);
  let mapped2 = list_map_property(imports, "name");
  return mapped2;
}
