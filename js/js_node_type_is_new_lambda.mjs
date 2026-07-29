import { fn_name } from "./fn_name.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo } from "./js_flo.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
export function js_node_type_is_new_lambda(f_name, node_type) {
  async function lambda(ast) {
    let code =
      "export function " +
      f_name +
      "(node) { let is = " +
      fn_name("js_node_type_is") +
      '(node, "' +
      node_type +
      '"); return is; }';
    let target_module = js_parse(code);
    let target_declaration = js_flo(target_module);
    let stub_declaration = js_flo(ast);
    object_replace(stub_declaration, target_declaration);
    await js_imports_missing_add_all(ast);
  }
  return lambda;
}
