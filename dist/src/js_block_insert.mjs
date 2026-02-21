import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
export function js_block_insert(stack, inserted) {
  let v = js_block_find(stack);
  let index = property_get(v, "index");
  let body = property_get(v, "body");
  list_insert(body, index, inserted);
}
