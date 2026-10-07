import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { song_glosses_line_references } from "./song_glosses_line_references.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function song_sections_glosses_references(sections, glosses) {
  "$plain sections";
  "$plain glosses";
  "Every passage of scripture a song rests on, each named once, in the order the song first names it.";
  "Named once, because a song comes back to the same verse from several different lines and the page shows it under each of them. Asking for it twice would only fetch the same chapter twice.";
  "What one line rests on is asked the same way the page asks it, so the file that is built can never hold a different set from the one the page goes looking for.";
  arguments_assert(arguments, 2);
  let references = [];
  for (let section of sections) {
    let lines = property_get(section, "lines");
    for (let line of lines) {
      let named = song_glosses_line_references(glosses, line);
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
