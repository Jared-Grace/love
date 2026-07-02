import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
import { math_max } from "../../../love/public/src/math_max.mjs";
import { list_size_less_1 } from "../../../love/public/src/list_size_less_1.mjs";
import { list_to_indices_skip_1 } from "../../../love/public/src/list_to_indices_skip_1.mjs";
export function list_text_insert_between_spaces_random(item3) {
  let skipped = list_to_indices_skip_1(item3);
  let max = list_size_less_1(skipped);
  let m = math_max(1, max);
  let count = integer_random(1, m);
  let items = list_shuffle_take(skipped, count);
  function lambda2(item, index) {
    let includes = list_includes(items, index);
    let on_true = text_space_nb();
    let result = ternary(includes, on_true, "");
    let r = [result, item];
    return r;
  }
  let mapped3 = list_map_index(item3, lambda2);
  let squashed = list_squash(mapped3);
  let joined = list_join_empty(squashed);
  let split = text_split_empty(joined);
  return split;
}
