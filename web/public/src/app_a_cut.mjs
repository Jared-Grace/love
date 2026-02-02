import { log } from "../../../love/public/src/log.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { app_a_paste } from "../../../love/public/src/app_a_paste.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_cut(o, a) {
  let r = {
    shortcut: "u",
    text: "Cut",
    fn: async function lambda2() {
      let overlay_close = object_property_get(o, "overlay_close");
      overlay_close();
      let ast = object_property_get(a, "ast");
      let node = object_property_get(a, "node");
      let v_match = js_visit_match(ast, node);
      let stack = object_property_get(v_match, "stack");
      let f = js_block_find(stack);
      let item = object_property_get(f, "item");
      let context = object_property_get(a, "context");
      storage_local_set_context(context, app_a_paste.name, item);
      let body = object_property_get(f, "body");
      list_remove(body, item);
      log({
        item,
        node,
        e,
      });
    },
  };
  return r;
}
