import { not } from "../../../love/public/src/not.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { function_is } from "../../../love/public/src/function_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
export function reply_sequence(sequence_fns) {
  let fn = function reply_sequence_matches(a) {
    function lambda2(ai) {
      let index_start = object_property_get(ai, "index");
      let tokens = object_property_get(ai, "tokens");
      let matches = true;
      let sequence_size = list_size(sequence_fns);
      if (list_size(tokens) - index_start < sequence_size) {
        matches = false;
      } else {
        function lambda(sequence_fn, index) {
          let fi = function_is(sequence_fn);
          if (not(fi)) {
            sequence_fn = function lambda3(a) {
              let index_start = object_property_get(a, "index");
              let token = list_get(tokens, index + index_start);
              if (sequence_fn !== token) {
                log({
                  sequence_item: sequence_fn,
                  token,
                });
                matches = false;
                let r = {
                  matches,
                  index: index_start + 1,
                };
                object_assign(ai, r);
              }
            };
          }
          let r = sequence_fn(ai);
        }
        each_index(sequence_fns, lambda);
      }
      let r = {
        matches,
        index: index_start + sequence_size,
      };
      object_assign(ai, r);
    }
    each(a, lambda2);
  };
  return fn;
}
