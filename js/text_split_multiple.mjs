import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
import { text_split } from "./text_split.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { each } from "./each.mjs";
export function text_split_multiple(t, delimiters) {
  text_is_assert_json(t, {
    hint: "the text to split should be text here — did an empty or non-text value arrive?",
    t,
    delimiters,
  });
  let v = list_first_remaining(delimiters);
  let remaining = property_get(v, "remaining");
  let first = property_get(v, "first");
  function lambda(delimiter) {
    let split = text_split(t, delimiter);
    t = list_join(split, first);
  }
  each(remaining, lambda);
  let parts = text_split(t, first);
  return parts;
}
