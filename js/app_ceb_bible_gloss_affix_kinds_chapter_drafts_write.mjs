import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_affix_kinds_chapter_drafts_write_generic } from "./gloss_affix_kinds_chapter_drafts_write_generic.mjs";
export async function app_ceb_bible_gloss_affix_kinds_chapter_drafts_write(
  chapter_code,
) {
  "One Cebuano chapter's wrong affix claims written again by the machine and left in the drafts file to be read.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA023, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Read what comes back rather than the exit. A chapter with nothing wrong in it answers with an empty list and that is a success, not a failure to find the chapter.";
  let fn = app_ceb_bible_gloss_generate;
  let r = await gloss_affix_kinds_chapter_drafts_write_generic(
    fn,
    chapter_code,
  );
  return r;
}
