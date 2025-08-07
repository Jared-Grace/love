import { js_visit_type } from "./js_visit_type.mjs";
import { function_parse } from "./function_parse.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_single } from "./list_single.mjs";

export async function function_imports_missing_add(f_name) {
  let parsed = await function_parse(f_name);
  js_visit_type(parsed, "ImportDeclaration", (v) => {
    let {node} = v
    let {specifiers,source} = node;
    if (!list_size_1(specifiers)) {
        return
    }
    if (!js_node_type_is(source,'Literal')) {
        return
    }
    let {value} = source;
    if (!string_starts_with(value, '.')) {
        return
    }
    let specifier = list_single(specifiers)
    console.log(specifier)
  });
}
