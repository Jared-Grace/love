import { arguments_assert } from "./arguments_assert.mjs";
import { song_agape_sections } from "./song_agape_sections.mjs";
import { song_agape_glosses } from "./song_agape_glosses.mjs";
import { song_sections_glosses_references } from "./song_sections_glosses_references.mjs";
export function song_agape_references() {
  "Every passage of scripture this song rests on, each named once, in the order the song first names it.";
  "IT IS ASKED BEFORE ANYBODY OPENS THE PAGE - the set is fixed by the song, so the words behind it can be fetched, written into one file and put in storage ahead of time instead of a chapter at a time while a reader waits.";
  arguments_assert(arguments, 0);
  let sections = song_agape_sections();
  let glosses = song_agape_glosses();
  let references = song_sections_glosses_references(sections, glosses);
  return references;
}
