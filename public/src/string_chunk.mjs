import { string_size } from "../../../love/public/src/string_size.mjs";
import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { string_slice } from "../../../love/public/src/string_slice.mjs";
export function string_chunk(input, dictionary, index_left) {
  let index_last = string_size(lower);
  function lambda3(index_right) {
    let sliced = string_slice(input, index_left, index_right);
    let exists = object_property_exists(dictionary, sliced);
    if (exists) {
      log({
        sliced,
      });
      string_chunk(input, dictionary, index_right);
    }
  }
  each_range_from(index_left + 1, index_last, lambda3);
}
