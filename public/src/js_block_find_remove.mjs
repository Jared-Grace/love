import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_block_find_remove(f) {
  f + " is the result of " + js_block_find;
  let item = property_get(f, "item");
  let body = property_get(f, "body");
  list_remove(body, item);
}
