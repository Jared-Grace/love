import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_initialize_empty } from "../../../love/public/src/object_property_initialize_empty.mjs";
import { object_property_initialize_list } from "../../../love/public/src/object_property_initialize_list.mjs";
import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_chapters_each_verses_check_with } from "../../../love/public/src/ebible_chapters_each_verses_check_with.mjs";
import { ebible_versions_english_downloadable_cache } from "../../../love/public/src/ebible_versions_english_downloadable_cache.mjs";
import { string_only_or_space } from "../../../love/public/src/string_only_or_space.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let symbols_all =
    "._​ּׁׂ -–—,;:!?…·'‘’\"“”()[]{}¶*/&#%•`°+=|⌃⌞⌟►◄$01½¼23¾456789aAæÆbBcCdDeEéèëfFﬁﬂgGhHiIïjJkKlLmMnNoOöœpPqQrRsStTuUüvVʋwWxXyYzZʼΑΩאבגדהוזחטיכלמנסעפצקרשת";
  let symbols_allowed =
    "01½¼23¾4556789aAæÆbBcCdDeEéèëfFﬁﬂgGhHiIïjJkKlLmMnNoOöœpPqQrRsStTuUüvVʋwWxXyYzZΑΩ";
  let normalize = {
    ﬁ: "fi",
    ﬂ: "fl",
    æ: "ae",
    Æ: "AE",
    é: "e",
    è: "e",
    ë: "e",
    ï: "i",
    ö: "o",
    ü: "u",
    ʋ: "v",
    Α: "A",
    Ω: "O",
    "½": "1/2",
    "¼": "1/4",
    "¾": "3/4",
  };
  let s = null;
  const bible_folders = await ebible_versions_english_downloadable_cache();
  bible_folders = ["engbsb"];
  let result = {};
  async function lambda2(bible_folder) {
    async function lambda(chapter_code, verses) {
      function lambda4(verse) {
        let text = object_property_get(verse, "text");
        let verse_number = object_property_get(verse, "verse_number");
        let replaced = string_only_or_space(text, symbols_allowed);
        let n = whitespace_normalize(replaced);
        let split = string_split_space(n);
        function lambda5(s) {
          let lower = string_lower_to(s);
          let word = object_property_initialize_empty(result, s);
          let chapter = object_property_initialize_empty(word, chapter_code);
          let versions = object_property_initialize_list(chapter, verse_number);
          list_add(versions, bible_folder);
        }
        each(split, lambda5);
      }
      each(verses, lambda4);
    }
    await ebible_chapters_each_verses_check_with(bible_folder, lambda);
  }
  await each_async(bible_folders, lambda2);
  return joined;
}
