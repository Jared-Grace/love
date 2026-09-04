import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapters_affix_kinds_wrong } from "./gloss_chapters_affix_kinds_wrong.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function app_ceb_bible_gloss_affix_kinds_wrong_names() {
  "Every Cebuano explanation calling a piece of its word by a name the dictionary gives no piece of, named once each however many chapters met it.";
  "The count beside this answers whether the store is getting better, and it is the number a rewrite of the whole store was judged by. It cannot hold a ratchet: a number falling is not a record of which readings were blessed, so nothing in it refuses the return of a fault that was already repaired.";
  "Named by the word and the name it wrongly gave a piece, because that pair is the whole of the fault and it is what somebody repairing it writes out again. One word met in a dozen chapters is one sentence to author, not a dozen, and the repair spreads itself from there.";
  "The explanation itself is left behind. A record is read by people deciding whether a fault is known, and a whole store's prose is more than anybody reads at once - a single chapter hands over its own findings when it is chosen.";
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let offenders = await gloss_chapters_affix_kinds_wrong(
    app_ceb_bible_gloss_generate,
    known,
  );
  let names = [];
  function chapter_read(chapter) {
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let word = property_get(finding, "word");
      function kind_read(kind) {
        let named = text_combine_multiple([word, " ", kind]);
        list_add(names, named);
      }
      let said = property_get(finding, "said");
      each(said, kind_read);
    }
    each(found, finding_read);
  }
  each(offenders, chapter_read);
  let unique = list_unique(names);
  let sorted = list_sort_text(unique);
  return sorted;
}
