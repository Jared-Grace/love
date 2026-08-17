import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_glosses_value_passages } from "./gloss_chapter_glosses_value_passages.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_placeholder_glosses } from "./gloss_placeholder_glosses.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";

export async function app_original_bible_gloss_placeholders_chapters() {
  "How many chapters of the original-language gloss have been authored, and which of them show a reader a marker where the short English under a word ought to be.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is measured from the moment it is written and nobody has to remember to name it anywhere.";
  "Each chapter carries back which marker was found and which of its passages carry it, because the repair is a word at a time and a chapter code on its own would send the next reader through the whole chapter to find out where.";
  "How many chapters were walked travels out beside them, because finding nothing and looking at nothing are the same word otherwise, and a store read out of a folder is exactly the sweep that can quietly start reading an empty one.";
  let fn = app_original_bible_gloss_generate;
  let values = gloss_placeholder_glosses();
  async function chapter_read(chapter_code) {
    async function value_read(value) {
      let passages = await gloss_chapter_glosses_value_passages(
        chapter_code,
        fn,
        value,
      );
      let asked = {
        gloss: value,
        passages,
      };
      return asked;
    }
    let answers = await list_map_async(values, value_read);
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
