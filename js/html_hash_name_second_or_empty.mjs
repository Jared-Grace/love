import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { text_split } from "./text_split.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_second } from "./list_second.mjs";
export function html_hash_name_second_or_empty() {
  "The part of the address after the slash, as in gem from #bible_word_voice_trial/gem, or empty text when the address has no slash.";
  "The part in front of the slash names the screen; this part is that screen's own business, such as which tab or which song to open, so a link can land on it without a click.";
  arguments_assert(arguments, 0);
  let name = html_hash_name_get();
  let parts = text_split(name, "/");
  let a = list_size(parts);
  let some = greater_than(a, 1);
  if (some) {
    let second = list_second(parts);
    return second;
  }
  let empty = "";
  return empty;
}
