import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_block_find_remove(r) {
  let item = property_get(r, "item");
  let index = property_get(r, "index");
  let body = property_get(r, "body");
  list_remove(body, item);
}
