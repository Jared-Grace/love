import { not } from "../../../love/public/src/not.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { function_is } from "../../../love/public/src/function_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
export function reply_sequence(sequence_fns) {
  let fn = function reply_sequence_matches(possibilities) {
    function lambda2(p) {
      function lambda(sequence_fn, index) {
        let fi = function_is(sequence_fn);
        if (not(fi)) {
          sequence_fn = function reply_wrap_inner(a) {
            let index_start = object_property_get(a, "index");
            let token = list_get(tokens, index + index_start);
            let matches = sequence_fn === token;
            let r = {
              matches,
              index: index_start + 1,
            };
            object_assign(p, r);
          };
        }
        p = sequence_fn(p);
      }
      each_index(sequence_fns, lambda);
    }
    each(possibilities, lambda2);
  };
  return fn;
}
