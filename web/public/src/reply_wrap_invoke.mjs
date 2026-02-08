import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
import { json_equal } from "../../../love/public/src/json_equal.mjs";
import { list_is_assert_json } from "../../../love/public/src/list_is_assert_json.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_is } from "../../../love/public/src/function_is.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export async function reply_wrap_invoke(item, possibilities) {
  let fi = function_is(item);
  let wrapped = null;
  if (fi) {
    wrapped = item;
  } else {
    let si2 = text_is(item);
    let size = null;
    if (si2) {
      size = string_size(item);
      if (size > 1) {
        let split = string_split_empty(item);
        wrapped = reply_sequence(split);
      }
    }
    if (null_is(wrapped)) {
      wrapped = function reply_wrap_inner(possibilities) {
        function lambda2(p) {
          let tokens = object_property_get(p, "tokens");
          let index_start = object_property_get(p, "index");
          let token = list_get(tokens, index_start);
          let matches_previous = object_property_get(p, "matches");
          let e = json_equal(item, token);
          let empty = item === "";
          let delta = 1;
          if (si2) {
            integer_is_assert(size);
            delta = size;
          }
          let matches = matches_previous && (e || empty);
          let r = {
            matches,
            index: index_start + delta,
          };
          object_assign(p, r);
        }
        each(possibilities, lambda2);
        return possibilities;
      };
    }
  }
  list_is_assert(possibilities);
  let result = await wrapped(possibilities);
  function lambda() {
    let v = {
      possibilities,
      wrapped,
      result,
    };
    return v;
  }
  list_is_assert_json(result, lambda);
  return result;
}
