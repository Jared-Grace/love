import { js_declare_is_if } from "../../../love/public/src/js_declare_is_if.mjs";
import { list_single_if } from "../../../love/public/src/list_single_if.mjs";
import { js_declare_declarations_get } from "../../../love/public/src/js_declare_declarations_get.mjs";
export function js_declare_single_is_if(node, lambda) {
  function lambda3() {
    let declarations = js_declare_declarations_get(node);
    list_single_if(declarations, lambda);
  }
  js_declare_is_if(node, lambda3);
}
