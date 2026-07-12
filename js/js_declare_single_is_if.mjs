import { js_declaration_is_if } from "./js_declaration_is_if.mjs";
import { list_single_if } from "./list_single_if.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
export function js_declare_single_is_if(node, lambda) {
  function lambda3() {
    let declarators = js_declaration_declarators_get(node);
    list_single_if(declarators, lambda);
  }
  js_declaration_is_if(node, lambda3);
}
