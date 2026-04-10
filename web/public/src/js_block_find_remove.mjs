import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_block_find_remove(f) {
  let item = property_get(f, "item");
  let body = property_get(f, "body");
  list_remove(body, item);
}
