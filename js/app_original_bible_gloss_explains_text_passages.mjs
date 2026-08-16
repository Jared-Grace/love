import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_explains_text_passages } from "./gloss_chapter_explains_text_passages.mjs";
export async function app_original_bible_gloss_explains_text_passages(
  chapter_code,
  text,
) {
  "Every passage of one authored chapter of the original-language gloss whose word explanations say a named piece of text, each named by the verses it covers and by how many of its explanations say it.";
  "$plain chapter_code";
  "$plain text";
  "both name text to read: a chapter of the Bible, and a run of letters to look for in what was written about it. Neither names anything that runs.";
  let fn = app_original_bible_gloss_generate;
  let r = await gloss_chapter_explains_text_passages(chapter_code, fn, text);
  return r;
}
