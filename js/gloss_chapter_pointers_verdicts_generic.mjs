import { gloss_chapter_passages_collect_all } from "./gloss_chapter_passages_collect_all.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passages_pointers_verdicts } from "./gloss_passages_pointers_verdicts.mjs";
export async function gloss_chapter_pointers_verdicts_generic(
  chapter_code,
  fn,
  lambda$pointer_is,
) {
  "One plain sentence for every pointing explanation of one stored gloss chapter, saying why it could not be given an address or that it was addressed.";
  "$plain chapter_code";
  "the code is a chapter's name, like MAT05, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "It reads the store and writes nothing back, so it can be asked as often as wanted and its answer is only a reading.";
  let read = await gloss_chapter_passages_collect_all(chapter_code, fn);
  let passages = property_get(read, "collected");
  let verdicts = gloss_passages_pointers_verdicts(passages, lambda$pointer_is);
  return verdicts;
}
