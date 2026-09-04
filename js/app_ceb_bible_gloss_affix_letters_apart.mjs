import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapters_affix_letters_wrong } from "./gloss_chapters_affix_letters_wrong.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_equals_not } from "./property_equals_not.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { gloss_offenders_said_names } from "./gloss_offenders_said_names.mjs";
export async function app_ceb_bible_gloss_affix_letters_apart() {
  "Every Cebuano explanation quoting letters for a piece of its word that stand nowhere in the dictionary's own cut of it, named once each however many chapters met it.";
  "One of the three readings of a disagreeing piece, and the only one that is an invention. Letters sitting inside the dictionary's are a disagreement about where the word ends and its piece begins, and letters holding the dictionary's inside them are a cut taken one layer further back; both tell a reader something true. Letters standing apart from both were got from nowhere.";
  "Named by the word and the piece rather than counted, because a count cannot be refused with anything a reader can act on, and because one word met in a dozen chapters is one thing to write out again rather than a dozen.";
  "Walking the chapters and gathering the names is the reading every sweep over this store does, so it is asked for rather than opened here; a claim standing near the dictionary's cut is named nothing, which is how the other two readings are passed over.";
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let offenders = await gloss_chapters_affix_letters_wrong(
    app_ceb_bible_gloss_generate,
    known,
  );
  function claim_name_try(word, claim) {
    let near = property_equals_not(claim, "relation", "apart");
    if (near) {
      return null;
    }
    let kind = property_get(claim, "kind");
    let quoted = property_get(claim, "quoted");
    let named = text_combine_multiple([word, " ", kind, " ", quoted]);
    return named;
  }
  let sorted = gloss_offenders_said_names(offenders, claim_name_try);
  return sorted;
}
