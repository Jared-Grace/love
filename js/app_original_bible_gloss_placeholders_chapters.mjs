import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_glosses_value_passages } from "./gloss_chapter_glosses_value_passages.mjs";
import { gloss_chapters_values_found_generic } from "./gloss_chapters_values_found_generic.mjs";
import { gloss_placeholder_glosses } from "./gloss_placeholder_glosses.mjs";
export async function app_original_bible_gloss_placeholders_chapters() {
  "How many chapters of the original-language gloss have been authored, and which of them show a reader a marker where the short English under a word ought to be.";
  "Each chapter carries back which marker was found and which of its passages carry it, because the repair is a word at a time and a chapter code on its own would send the next reader through the whole chapter to find out where.";
  "The sweep itself is the one next door, which is the same sweep with a different list of what to look for. What is looked for here is every stand-in a word has ever been left holding, and a passage is asked for it by reading the short English under each of its words.";
  let fn = app_original_bible_gloss_generate;
  let values = gloss_placeholder_glosses();
  let r = await gloss_chapters_values_found_generic(
    fn,
    values,
    "gloss",
    gloss_chapter_glosses_value_passages,
  );
  return r;
}
