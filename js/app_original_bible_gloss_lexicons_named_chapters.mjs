import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_explains_text_passages } from "./gloss_chapter_explains_text_passages.mjs";
import { gloss_chapters_values_found_generic } from "./gloss_chapters_values_found_generic.mjs";
import { gloss_lexicon_names } from "./gloss_lexicon_names.mjs";
export async function app_original_bible_gloss_lexicons_named_chapters() {
  "How many chapters of the original-language gloss have been authored, and which of them hold an explanation that says the name of a lexicon to its reader.";
  "Each offending chapter carries back which name was found and which of its passages say it, because the repair is per passage and a chapter code on its own would send the next reader through the whole chapter to find out where.";
  "The sweep itself is the one next door, which is the same sweep with a different list of what to look for. What is looked for here is every name a lexicon goes by, and a passage is asked for it by reading what its explanations say in plain words.";
  let fn = app_original_bible_gloss_generate;
  let names = gloss_lexicon_names();
  let r = await gloss_chapters_values_found_generic(
    fn,
    names,
    "name",
    gloss_chapter_explains_text_passages,
  );
  return r;
}
