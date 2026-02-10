import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { text_to } from "../../../love/public/src/text_to.mjs";
import { list_max } from "../../../love/public/src/list_max.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_g_bible_home_inner(context, download) {
  let downloaded = null;
  let chapter_code = null;
  let verses = [];
  let r = null;
  async function lambda3(la) {
    async function lambda(a) {
      list_add(verses, a);
      let verse_number = property_get(a, "verse_number");
      chapter_code = property_get(a, "chapter_code");
      downloaded = await download(chapter_code);
      let passages = property_get(downloaded, "passages");
      function lambda2(passage) {
        let verse_numbers = property_get(passage, "verse_numbers");
        let mapped = list_map(verse_numbers, integer_to_try);
        let max = list_max(mapped);
        let s = text_to(max);
        if (equal(s, verse_number)) {
          let copy = list_copy(verses);
          la({
            passage,
            verses: copy,
          });
          list_empty(verses);
        }
      }
      each(passages, lambda2);
    }
    r = await app_bible_home_generic(context, lambda);
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
