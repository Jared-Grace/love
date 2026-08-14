import { gloss_passage_entries_set } from "./gloss_passage_entries_set.mjs";
import { chapter_passage_write } from "./chapter_passage_write.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_passage_write(passage, entries, fn) {
  "Save one passage's authored word explanations into a chapter's gloss store, replacing whatever that passage held before and leaving every other passage of the chapter untouched.";
  "A passage is recognised by the verse numbers it covers, so re-writing one that is already there corrects it rather than doubling it, and the chapter can be authored over as many sittings as it takes.";
  let chapter_code = property_get(passage, "chapter_code");
  gloss_passage_entries_set(passage, entries);
  let path = await chapter_passage_write(chapter_code, fn, passage);
  return path;
}
