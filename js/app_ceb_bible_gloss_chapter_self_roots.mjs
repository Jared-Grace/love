import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_self_roots } from "./gloss_entries_self_roots.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_chapter_self_roots(chapter_code) {
  "Every Cebuano explanation in one chapter that gives its own word as the root it is built from.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO22, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The root comparison and this one are asked side by side and neither replaces the other. That one finds a root the prose never mentions; this one finds prose that mentions a root which is only the word again. A chapter can come out clean on one and badly on the other.";
  let found = await gloss_chapter_entries_collect_generic(
    chapter_code,
    app_ceb_bible_gloss_generate,
    gloss_entries_self_roots,
  );
  let count = list_size(found);
  let r = {
    chapter_code,
    count,
    found,
  };
  return r;
}
