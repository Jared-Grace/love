import { list_includes } from "./list_includes.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_bible_home_generic } from "./app_shared_bible_home_generic.mjs";
import { noop } from "./noop.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_bible_home_inner(context, download, app_fn) {
  let downloaded = null;
  let chapter_code = null;
  let verses = [];
  let r = null;
  async function lambda3(la) {
    async function lambda(a) {
      list_add(verses, a);
      let property_name = verse_number_key();
      let verse_number = property_get(a, property_name);
      chapter_code = property_get(a, "chapter_code");
      downloaded = await download(chapter_code);
      let passages_downloaded = property_get(downloaded, "passages");
      ("a passage is shown at every verse it covers, not only at its last one. these readers show one verse at a time, so asking whether the verse is the passage's LAST left a reader standing on any earlier verse of it with nothing at all on the screen - no original text, no explanations, and nothing saying the passage carries on. john 2 is authored as 1-2 and then 3, and opening the chapter lands on verse 1, so the first thing a reader saw of a chapter that IS written was a blank one.");
      function lambda2(passage) {
        let verse_numbers = property_get(passage, "verse_numbers");
        if (list_includes(verse_numbers, verse_number)) {
          let copy = list_copy(verses);
          la({
            passage,
            verses: copy,
          });
          list_clear(verses);
        }
      }
      each(passages_downloaded, lambda2);
    }
    ("false at the end: every app that comes through here is verse-only. the gloss readers and the game's bible render no whole-chapter view at all, so there is nothing for a way-in button to reach. an app that grows one changes this word rather than adding a parameter nobody else would ever pass differently.");
    r = await app_shared_bible_home_generic(
      context,
      lambda,
      noop,
      app_fn,
      false,
    );
  }
  let passages = await list_adder_async(lambda3);
  let v = {
    chapter_code,
    downloaded,
    r,
    passages,
  };
  return v;
}
