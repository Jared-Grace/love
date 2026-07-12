import { js_identifier_is_if } from "../../love/js/js_identifier_is_if.mjs";
import { js_identifier_name_includes } from "../../love/js/js_identifier_name_includes.mjs";
export function js_identifier_name_includes_try(callee, part) {
  let includes = false;
  function lambda2() {
    includes = js_identifier_name_includes(callee, part);
  }
  js_identifier_is_if(callee, lambda2);
  return includes;
}
