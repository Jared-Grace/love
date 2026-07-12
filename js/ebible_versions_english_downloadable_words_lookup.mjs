import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
import { each } from "./each.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { property_initialize_empty } from "./property_initialize_empty.mjs";
import { equal_not } from "./equal_not.mjs";
import { text_transform_lookup } from "./text_transform_lookup.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { text_only_or_space } from "./text_only_or_space.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
export async function ebible_versions_english_downloadable_words_lookup() {
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
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let result = {};
  async function lambda2(bible_folder) {
    async function lambda(chapter_code, verses) {
      function lambda4(verse) {
        let text = property_get(verse, "text");
        let verse_number = property_get(verse, "verse_number");
        let replaced = text_only_or_space(text, symbols_allowed);
        let n = whitespace_normalize(replaced);
        let split = text_split_space(n);
        function lambda5(s) {
          let lower = text_lower_to(s);
          word_add(lower);
          let t = text_transform_lookup(lower, normalize);
          if (equal_not(t, lower)) {
            word_add(lower);
          }
          function word_add(lower) {
            let word = property_initialize_empty(result, lower);
            let chapter = property_initialize_empty(word, chapter_code);
            let versions = property_initialize_list(chapter, verse_number);
            list_add_if_not_includes(versions, bible_folder);
          }
        }
        each(split, lambda5);
      }
      each(verses, lambda4);
    }
    await ebible_chapters_each_verses_check_with(bible_folder, lambda);
  }
  await each_async(bible_folders, lambda2);
  return result;
}
