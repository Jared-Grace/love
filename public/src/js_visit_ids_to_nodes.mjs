import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_ids_to_nodes(ast, ids) {
  let result = [];
  let id = null;
  let i = 0;
  function lambda(v) {
    let node = property_get(v, "node");
    let includes = list_includes(ids, i);
    if (includes) {
      list_add(result, node);
    }
    i++;
  }
  js_visit(ast, lambda);
  integer_is_assert(id);
  return result;
}
