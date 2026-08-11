import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_shared_bible_read_count_refresh(
  verse_numbers_chosen,
  max,
  count_status,
) {
  arguments_assert(arguments, 3);
  let n = list_size(verse_numbers_chosen);
  let text = "";
  if (greater_than(n, 0)) {
    ("up to, because the second number is the most you may pick rather than how many verses are there - without those words one verse chosen in a hundred-verse chapter reads as one of two");
    text = text_combine_multiple([n, " of up to ", max, " selected"]);
  }
  html_text_set(count_status, text);
}
