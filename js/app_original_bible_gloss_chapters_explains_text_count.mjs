import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapters_explains_text_count } from "./gloss_chapters_explains_text_count.mjs";
export async function app_original_bible_gloss_chapters_explains_text_count(
  text,
) {
  "Every authored chapter of the original-language gloss whose word explanations say a named piece of text, each with how many passages and explanations say it.";
  "$plain text";
  "the text is a run of letters to look for in what was written. It names nothing that runs.";
  let fn = app_original_bible_gloss_generate;
  let r = await gloss_chapters_explains_text_count(fn, text);
  return r;
}
