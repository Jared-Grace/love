import { verse_number_key } from "./verse_number_key.mjs";
import { integer_to_try_multiple_max_text_to } from "./integer_to_try_multiple_max_text_to.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_bible_home_generic } from "./app_shared_bible_home_generic.mjs";
import { noop } from "./noop.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_bible_home_inner(context, download, app_fn) {
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
      function lambda2(passage) {
        let verse_numbers = property_get(passage, "verse_numbers");
        let s = integer_to_try_multiple_max_text_to(verse_numbers);
        if (equal(s, verse_number)) {
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
    r = await app_shared_bible_home_generic(context, lambda, noop, app_fn);
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
