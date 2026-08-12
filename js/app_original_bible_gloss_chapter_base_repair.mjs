import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_base_repair } from "./gloss_chapter_base_repair.mjs";
export async function app_original_bible_gloss_chapter_base_repair(
  chapter_code,
) {
  "Bring one authored original-language gloss chapter back in line with the base text.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let fn = app_original_bible_gloss_generate;
  let r = await gloss_chapter_base_repair(chapter_code, fn);
  return r;
}
