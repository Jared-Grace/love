import { js_declare_single_is_if_async } from "./js_declare_single_is_if_async.mjs";
import { js_identifier_is_if_async } from "./js_identifier_is_if_async.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { property_get } from "./property_get.mjs";
export async function js_declare_single_identifier_is_if_async(
  node,
  lambda$init$id,
) {
  async function lambda(d) {
    let id = property_get(d, "id");
    async function lambda3() {
      let init = js_declare_init_get(d);
      await lambda$init$id(init, id);
    }
    await js_identifier_is_if_async(id, lambda3);
  }
  await js_declare_single_is_if_async(node, lambda);
}
