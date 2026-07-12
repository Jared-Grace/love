import { text_space_nb } from "./text_space_nb.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { ternary } from "./ternary.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { integer_random } from "./integer_random.mjs";
import { math_max } from "./math_max.mjs";
import { list_size_less_1 } from "./list_size_less_1.mjs";
import { list_to_indices_skip_1 } from "./list_to_indices_skip_1.mjs";
export function list_text_insert_between_spaces_random(item3) {
  let skipped = list_to_indices_skip_1(item3);
  let max = list_size_less_1(skipped);
  let m = math_max(1, max);
  let count = integer_random(1, m);
  let items = list_shuffle_take(skipped, count);
  function lambda(item, index) {
    let includes = list_includes(items, index);
    let on_true = text_space_nb();
    let result = ternary(includes, on_true, "");
    let r = [result, item];
    return r;
  }
  let mapped = list_map_index(item3, lambda);
  let squashed = list_squash(mapped);
  let joined = list_join_empty(squashed);
  let split = text_split_empty(joined);
  return split;
}
