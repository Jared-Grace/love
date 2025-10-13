import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { string_slice } from "../../../love/public/src/string_slice.mjs";
export function string_chunk(input, dictionary, index_left, result, current) {
  let index_last = string_size(input);
  if (index_left === index_last) {
    let copy = list_copy(current);
    list_add(result, copy);
  }
  marker("1");
  function lambda3(index_right) {
    let sliced = string_slice(input, index_left, index_right);
    let exists = object_property_exists(dictionary, sliced);
    if (exists) {
      list_add(current, sliced);
      log({
        sliced,
      });
      string_chunk(input, dictionary, index_right, result, current);
      let v = list_pop(list);
    }
  }
  each_range_from(index_left + 1, index_last, lambda3);
}
