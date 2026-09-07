import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_claimed_stopped_short } from "./app_ceb_bible_gloss_roots_claimed_stopped_short.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function app_ceb_bible_gloss_roots_claimed_stopped_short_named() {
  "Every root the Cebuano gloss store cut short of a root the dictionary knows, named once each as the letters claimed and the longer run they were cut from.";
  "The sweep beside this one answers with everything a reader needs to judge one of these - the words, the chapters, the sentence that said it. A ratchet can hold none of that, because a record that moves whenever a chapter is authored is not a record of anything. What is stable is the pair: these letters were claimed where those letters were known, and that pair is either there or it is not.";
  "The longest run is the one named, out of however many the dictionary vouched for at that spot, because it is the whole word the letters were taken from and the shorter ones are all inside it. Naming them all would make the same fault read as several.";
  "Sorted so that the record is written the same way every time it is written, which is what lets two runs of it be compared at all.";
  arguments_assert(arguments, 0);
  let read = await app_ceb_bible_gloss_roots_claimed_stopped_short();
  let listed = property_get(read, "listed");
  function row_named(row) {
    let claimed = property_get(row, "stated_root");
    let longer = property_get(row, "known_longer");
    let whole = list_first(longer);
    let named = text_combine_multiple([claimed, " cut from ", whole]);
    return named;
  }
  let names = list_map(listed, row_named);
  let sorted = list_sort_text(names);
  return sorted;
}
