import { js_node_to_block } from "./js_node_to_block.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_remove } from "./list_remove.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { property_get } from "./property_get.mjs";
export function app_a_cut(o, a) {
  let r = {
    shortcut: "u",
    text: "Cut",
    fn: async function lambda() {
      let overlay_close = property_get(o, "overlay_close");
      overlay_close();
      let ast = property_get(a, "ast");
      let node = property_get(a, "node");
      let f = js_node_to_block(ast, node);
      let item = property_get(f, "item");
      let context = property_get(a, "context");
      storage_local_set_context(context, fn_name("app_a_paste"), item);
      let body = property_get(f, "body");
      list_remove(body, item);
    },
  };
  return r;
}
