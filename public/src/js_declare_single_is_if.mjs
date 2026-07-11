import { js_declaration_is_if } from "../../../love/public/src/js_declaration_is_if.mjs";
import { list_single_if } from "../../../love/public/src/list_single_if.mjs";
import { js_declaration_declarators_get } from "../../../love/public/src/js_declaration_declarators_get.mjs";
export function js_declare_single_is_if(node, lambda) {
  function lambda3() {
    let declarations = js_declaration_declarators_get(node);
    list_single_if(declarations, lambda);
  }
  js_declaration_is_if(node, lambda3);
}
