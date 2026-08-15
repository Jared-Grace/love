import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_last_remaining } from "./list_last_remaining.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function gloss_parsing_tail_clause_add(entries, clauses) {
  arguments_assert(arguments, 2);
  let tail_words = [];
  let tail_dimensions = ["person", "gender", "number"];
  for (let dimension of tail_dimensions) {
    let found = list_filter_property(entries, "dimension", dimension);
    let items = list_map_property(found, "phrase");
    list_add_multiple(tail_words, items);
  }
  let tail_count = list_size(tail_words);
  let tail_text = list_join_comma_space(tail_words);
  let tail_single = equal(tail_count, 1);
  if (tail_count) {
    if (not(tail_single)) {
      let split = list_last_remaining(tail_words);
      let last = property_get(split, "last");
      let remaining = property_get(split, "remaining");
      let leading = list_join_comma_space(remaining);
      tail_text = text_combine_multiple([leading, " and ", last]);
    }
    list_add(clauses, tail_text);
  }
}
