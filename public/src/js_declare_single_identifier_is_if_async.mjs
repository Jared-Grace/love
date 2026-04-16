import { js_identifier_is_if_async } from "../../../love/public/src/js_identifier_is_if_async.mjs";
import { js_declare_init_get } from "../../../love/public/src/js_declare_init_get.mjs";
import { js_declare_single_is_if } from "../../../love/public/src/js_declare_single_is_if.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_declare_single_identifier_is_if_async(node, lambda$d) {
  async function lambda(d) {
    let id = property_get(d, "id");
    function lambda3() {
      let init = js_declare_init_get(d);
      lambda$d(init, id);
    }
    await js_identifier_is_if_async(id, lambda3);
  }
  js_declare_single_is_if(node, lambda);
}
