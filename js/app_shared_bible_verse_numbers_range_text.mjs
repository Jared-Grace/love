import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { equal } from "./equal.mjs";
import { app_shared_bible_verses_separator } from "./app_shared_bible_verses_separator.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_bible_verse_numbers_range_text(verse_numbers) {
  "A passage's verses written the way a link writes a run of them - its first and last verse with the link's separator between, or the one number alone when the passage is one verse. The same word goes on the button and into the address, so what the reader sees and what they share agree.";
  arguments_assert(arguments, 1);
  let first = list_first(verse_numbers);
  let last = list_last(verse_numbers);
  if (equal(first, last)) {
    return first;
  }
  let separator = app_shared_bible_verses_separator();
  let text = text_combine_multiple([first, separator, last]);
  return text;
}
