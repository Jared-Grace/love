import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_gate_told_chapters(fn, told) {
  "One gloss ratchet's verdict handed back with the number of chapters of that store its sweep walked put beside it.";
  "Finding nothing and reaching nothing are the same word, so a ratchet that says only what was wrong cannot be told from one whose reading has quietly stopped reaching anything. The chapters are asked for from the same listing the sweep gets its own work from, so the two fall together: on the day that listing stops answering, the number goes to nought where a reader can see it rather than the verdict going green.";
  "The verdict is handed in already reached rather than worked out here, because which sweep to run and which record to hold it against is the whole of what one ratchet has that another does not. What is left over is this, and it was written out twice before it was written down once.";
  arguments_assert(arguments, 2);
  let chapter_codes = await gloss_chapters_stored(fn);
  let chapters = list_size(chapter_codes);
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let r = {
    chapters,
    added,
    stale,
  };
  return r;
}
