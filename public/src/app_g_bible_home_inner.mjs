import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { string_to } from "../../../love/public/src/string_to.mjs";
import { list_max } from "../../../love/public/src/list_max.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { g_sermon_generate_download } from "../../../love/public/src/g_sermon_generate_download.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_g_bible_home_inner(
  chapter_code,
  downloaded,
  on_passage,
  r,
  context,
) {
  async function lambda(a) {
    let p = object_property_get(a, "p");
    let verse_number = object_property_get(a, "verse_number");
    chapter_code = object_property_get(a, "chapter_code");
    downloaded = await g_sermon_generate_download(chapter_code);
    let passages = object_property_get(downloaded, "passages");
    function lambda2(passage) {
      let verse_numbers = object_property_get(passage, "verse_numbers");
      let mapped = list_map(verse_numbers, integer_to_try);
      let max = list_max(mapped);
      let s = string_to(max);
      if (equal(s, verse_number)) {
        on_passage(passage, p);
      }
    }
    each(passages, lambda2);
  }
  r = await app_bible_home_generic(context, lambda);
  let v = {
    chapter_code,
    downloaded,
    r,
  };
  return v;
}
