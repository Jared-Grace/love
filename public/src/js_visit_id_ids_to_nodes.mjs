import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_id_ids_to_nodes(ast, ids) {
  let result = [];
  let id = null;
  let i = 0;
  function lambda(v) {
    let node = property_get(v, "node");
    let includes = list_includes(ids, node);
    if (includes) {
      id = i;
    }
    i++;
  }
  js_visit(ast, lambda);
  integer_is_assert(id);
  return id;
}
