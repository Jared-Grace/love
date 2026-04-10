import { js_visit_id_to_block } from "../../../love/public/src/js_visit_id_to_block.mjs";
import { js_visit_declarators_uniqueify } from "../../../love/public/src/js_visit_declarators_uniqueify.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_statement_duplicate(ast, selects) {
  let r = js_visit_id_to_block(ast, selects);
  let item = property_get(r, "item");
  let index = property_get(r, "index");
  let body = property_get(r, "body");
  let copy = json_copy(item);
  js_visit_declarators_uniqueify(ast, copy);
  list_insert(body, index + 1, copy);
}
