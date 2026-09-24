import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
export function html_hash_name_first() {
  "The part of the address in front of the slash, as bible_word_voice_trial from #bible_word_voice_trial/gem, or the whole word after the hash mark when there is no slash.";
  "It is the other half of the part after the slash: that part is the screen's own business, and this is the name of the screen, so a page that answers to a name keeps answering to it when a link adds something after the slash.";
  arguments_assert(arguments, 0);
  let name = html_hash_name_get();
  let parts = text_split(name, "/");
  let first = list_first(parts);
  return first;
}
