import { integer_is_assert_json } from "./integer_is_assert_json.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { null_is } from "./null_is.mjs";
import { text_size } from "./text_size.mjs";
import { text_is } from "./text_is.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
import { each } from "./each.mjs";
import { object_assign } from "./object_assign.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { function_is } from "./function_is.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { text_combine } from "./text_combine.mjs";
export async function reply_wrap_invoke(item, possibilities) {
  let fi = function_is(item);
  let wrapped = null;
  if (fi) {
    wrapped = item;
  } else {
    let si = text_is(item);
    let size = null;
    if (si) {
      size = text_size(item);
      if (size > 1) {
        let split = text_split_empty(item);
        wrapped = reply_sequence(split);
      }
    }
    if (null_is(wrapped)) {
      wrapped = function reply_wrap_inner(possibilities) {
        function lambda2(p) {
          let tokens = property_get(p, "tokens");
          let index_start = property_get(p, "index");
          let token = list_get(tokens, index_start);
          let matches_previous = property_get(p, "matches");
          let e = json_equal(item, token);
          let empty = item === "";
          let delta = 1;
          if (si) {
            integer_is_assert_json(size, {
              hint: "the text size should be a whole number so the token index can advance by it",
              item,
            });
            delta = size;
          }
          let matches = matches_previous && (e || empty);
          let r = {
            matches,
            index: text_combine(index_start, delta),
          };
          object_assign(p, r);
        }
        each(possibilities, lambda2);
        return possibilities;
      };
    }
  }
  list_is_assert_json(possibilities, {
    hint: "the possibilities to match against should be a list",
  });
  let result = await wrapped(possibilities);
  list_is_assert_json(result, {
    hint: "the wrapped matcher should return the possibilities list",
    possibilities,
    wrapped,
    result,
  });
  return result;
}
