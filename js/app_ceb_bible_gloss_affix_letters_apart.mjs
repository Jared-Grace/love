import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { gloss_chapters_affix_letters_wrong } from "./gloss_chapters_affix_letters_wrong.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_ceb_bible_gloss_affix_letters_apart() {
  "Every Cebuano explanation quoting letters for a piece of its word that stand nowhere in the dictionary's own cut of it, named once each however many chapters met it.";
  "One of the three readings of a disagreeing piece, and the only one that is an invention. Letters sitting inside the dictionary's are a disagreement about where the word ends and its piece begins, and letters holding the dictionary's inside them are a cut taken one layer further back; both tell a reader something true. Letters standing apart from both were got from nowhere.";
  "Named by the word and the piece rather than counted, because a count cannot be refused with anything a reader can act on, and because one word met in a dozen chapters is one thing to write out again rather than a dozen.";
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let offenders = await gloss_chapters_affix_letters_wrong(
    app_ceb_bible_gloss_generate,
    known,
  );
  let names = [];
  function chapter_read(chapter) {
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let word = property_get(finding, "word");
      function claim_read(claim) {
        let relation = property_get(claim, "relation");
        let standing_apart = equal(relation, "apart");
        let near = not(standing_apart);
        if (near) {
          return;
        }
        let kind = property_get(claim, "kind");
        let quoted = property_get(claim, "quoted");
        let named = text_combine_multiple([word, " ", kind, " ", quoted]);
        list_add(names, named);
      }
      let said = property_get(finding, "said");
      each(said, claim_read);
    }
    each(found, finding_read);
  }
  each(offenders, chapter_read);
  let unique = list_unique(names);
  let sorted = list_sort_text(unique);
  return sorted;
}
