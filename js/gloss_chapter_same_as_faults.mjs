import { gloss_chapter_passages_collect_all } from "./gloss_chapter_passages_collect_all.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passages_same_as_faults } from "./gloss_passages_same_as_faults.mjs";
export async function gloss_chapter_same_as_faults(chapter_code, fn) {
  "Every pointer in one stored gloss chapter that does not land on exactly one explanation.";
  "$plain chapter_code";
  "the code is a chapter's name, like ACT10, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The whole chapter is read before anything is judged, because a pointer names a verse and the verse it names may sit in any passage of the chapter, including one further down than the pointer itself.";
  let read = await gloss_chapter_passages_collect_all(chapter_code, fn);
  let passages = property_get(read, "collected");
  let r = gloss_passages_same_as_faults(passages);
  return r;
}
