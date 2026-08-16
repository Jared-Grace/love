import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_explains_text_passages } from "./gloss_chapter_explains_text_passages.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_lexicon_names } from "./gloss_lexicon_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
export async function app_original_bible_gloss_lexicons_named_chapters() {
  "How many chapters of the original-language gloss have been authored, and which of them hold an explanation that says the name of a lexicon to its reader.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is checked from the moment it is written and nobody has to remember to name it anywhere.";
  "Each offending chapter carries back which name was found and which of its passages say it, because the repair is per passage and a chapter code on its own would send the next reader through the whole chapter to find out where.";
  "How many chapters were walked travels out beside them, because finding nothing and looking at nothing are the same word otherwise, and a store read out of a folder is exactly the sweep that can quietly start reading an empty one.";
  let fn = app_original_bible_gloss_generate;
  let names = gloss_lexicon_names();
  async function chapter_read(chapter_code) {
    async function name_read(name) {
      let passages = await gloss_chapter_explains_text_passages(
        chapter_code,
        fn,
        name,
      );
      let asked = {
        name,
        passages,
      };
      return asked;
    }
    let answers = await list_map_async(names, name_read);
    function passages_is(asked) {
      let offending = property_list_empty_not_is(asked, "passages");
      return offending;
    }
    let found = list_filter(answers, passages_is);
    return found;
  }
  let offenders = await gloss_chapters_offenders_generic(fn, chapter_read);
  let chapter_codes = await gloss_chapters_stored(fn);
  let r = {
    chapters: list_size(chapter_codes),
    offenders,
  };
  return r;
}
