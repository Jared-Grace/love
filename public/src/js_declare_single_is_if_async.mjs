import { js_declare_is_if } from "../../../love/public/src/js_declare_is_if.mjs";
import { js_declare_declarations_get } from "../../../love/public/src/js_declare_declarations_get.mjs";
export function js_declare_single_is_if_async(previous, lambda) {
  function lambda3() {
    let declarations = js_declare_declarations_get(previous);
    list_single_if_async(declarations, lambda);
  }
  js_declare_is_if(previous, lambda3);
}
