import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_markdown_marks } from "./gloss_markdown_marks.mjs";
import { gloss_chapters_values_found_generic } from "./gloss_chapters_values_found_generic.mjs";
import { gloss_chapter_explains_text_passages } from "./gloss_chapter_explains_text_passages.mjs";
export async function app_original_bible_gloss_markdown_chapters() {
  "How many chapters of the original-language gloss have been authored, and which of them hold an explanation carrying a mark the page will show as typed - a star, a backtick or a line break.";
  "Each offending chapter carries back which mark was found and which of its passages hold it, because the rewrite is per passage and a chapter code on its own would send the next reader through the whole chapter to find out where.";
  "The sweep itself is the one next door, which is the same sweep with a different list of what to look for. What is looked for here is every mark a plain-text explanation must not hold, and a passage is asked for it by reading what its explanations say.";
  let fn = app_original_bible_gloss_generate;
  let marks = gloss_markdown_marks();
  let r = await gloss_chapters_values_found_generic(
    fn,
    marks,
    "mark",
    gloss_chapter_explains_text_passages,
  );
  return r;
}
