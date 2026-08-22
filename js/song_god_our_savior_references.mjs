import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_sections } from "./song_god_our_savior_sections.mjs";
import { property_get } from "./property_get.mjs";
import { song_god_our_savior_line_references } from "./song_god_our_savior_line_references.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function song_god_our_savior_references() {
  "Every passage of scripture this song rests on, each named once, in the order the song first names it.";
  "IT IS ASKED BEFORE ANYBODY OPENS THE PAGE, which is the whole point of it - the set is fixed by the song, so the words behind it can be fetched, written into one file and put in storage ahead of time instead of a chapter at a time while a reader waits.";
  "Named once, because a song comes back to the same verse from several different lines and the page shows it under each of them. Asking for it twice would only fetch the same chapter twice.";
  "What one line rests on is asked next door, the same way the page asks it, so the file that is built can never hold a different set from the one the page goes looking for.";
  arguments_assert(arguments, 0);
  let sections = song_god_our_savior_sections();
  let references = [];
  for (let section of sections) {
    let lines = property_get(section, "lines");
    for (let line of lines) {
      let named = song_god_our_savior_line_references(line);
      for (let reference of named) {
        let already = list_includes(references, reference);
        if (already) {
          continue;
        }
        list_add(references, reference);
      }
    }
  }
  return references;
}
