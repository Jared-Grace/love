import { log } from "../../../love/public/src/log.mjs";
import { list_is_assert_json } from "../../../love/public/src/list_is_assert_json.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { function_is } from "../../../love/public/src/function_is.mjs";
export function match_wrap_invoke(item, possibilities) {
  let fi = function_is(item);
  if (not(fi)) {
    item = function reply_wrap_inner(possibilities) {
      function lambda2(p) {
        let tokens = object_property_get(p, "tokens");
        let index_start = object_property_get(p, "index");
        let token = list_get(tokens, index_start);
        let matches_previous = object_property_get(p, "matches");
        let matches = matches_previous && item === token;
        if (not(matches)) {
          log({
            item,
            token,
          });
        }
        let r = {
          matches,
          index: index_start + 1,
        };
        object_assign(p, r);
      }
      each(possibilities, lambda2);
      return possibilities;
    };
  }
  list_is_assert(possibilities);
  let result = item(possibilities);
  function lambda() {
    let v = {
      possibilities,
      item,
      result,
    };
    return v;
  }
  list_is_assert_json(result, lambda);
  return result;
}
