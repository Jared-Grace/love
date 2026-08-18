import { app_original_bible_gloss_explains_write } from "./app_original_bible_gloss_explains_write.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { each_async } from "./each_async.mjs";
import { each_index } from "./each_index.mjs";
import { equal } from "./equal.mjs";
import { gloss_chapter_passages_asked_generic } from "./gloss_chapter_passages_asked_generic.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
import { gloss_explain_marker_clauses_stripped } from "./gloss_explain_marker_clauses_stripped.mjs";
import { gloss_placeholder_glosses } from "./gloss_placeholder_glosses.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function app_original_bible_gloss_marker_clauses_repair() {
  "Take out of the original-language gloss every clause that points at a marker beside a word that no longer carries one, and answer with the passages mended and how many words were mended in each.";
  "An author who left a marker under a word often pointed at it in the sentence beside it, so mending the two halves of a word's row is one piece of work in two sittings: the short English is written first, and this is what closes the second half. Until it runs, a mended word reads with a sentence pointing at a mark that is no longer on the page.";
  "It finds its own work rather than being handed a list, and it finds it by asking which words still carry a marker - so a chapter half mended keeps every clause that is still true, and running it again after everything is written changes nothing.";
  "Only the sentence a reader reads is written back, and only at the standings that changed. The words themselves are never retyped, because a passage's Greek and Hebrew do not survive being typed again.";
  let fn = app_original_bible_gloss_generate;
  let markers = gloss_placeholder_glosses();
  let gloss_key = gloss_entry_gloss_key();
  let explain_key = gloss_entry_explain_key();
  let chapter_codes = await gloss_chapters_stored(fn);
  let mended = [];
  async function chapter_read(chapter_code) {
    function passage_read(entries, verses) {
      let mends = {};
      function entry_read(entry, index) {
        let gloss = property_get(entry, gloss_key);
        let marked = list_includes(markers, gloss);
        if (marked) {
          return;
        }
        let explain = property_get(entry, explain_key);
        let stripped = gloss_explain_marker_clauses_stripped(explain);
        let same = equal(stripped, explain);
        if (same) {
          return;
        }
        property_set(mends, index, stripped);
      }
      each_index(entries, entry_read);
      let names = object_property_names(mends);
      let none = list_empty_is(names);
      if (none) {
        let nothing = null;
        return nothing;
      }
      let saying = {
        verses,
        mends,
        words: list_size(names),
      };
      return saying;
    }
    let sayings = await gloss_chapter_passages_asked_generic(
      chapter_code,
      fn,
      passage_read,
    );
    async function saying_write(saying) {
      let verses = property_get(saying, "verses");
      let mends = property_get(saying, "mends");
      let words = property_get(saying, "words");
      await app_original_bible_gloss_explains_write(
        chapter_code,
        verses,
        mends,
      );
      list_add(mended, {
        chapter_code,
        verses,
        words,
      });
    }
    await each_async(sayings, saying_write);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    passages: list_size(mended),
    mended,
  };
  return r;
}
