import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_store_outvoted_claims } from "./app_ceb_bible_gloss_roots_store_outvoted_claims.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_store_claim_derived_proven() {
  "The outvoted claims where the root the Cebuano gloss store named is itself a word the dictionary says came from somewhere else - so the store handed a reader an affixed form as though it were a root, proven without anybody reading the sentence.";
  "★ THE PILE LEFT FOR A PERSON WAS NEVER ALL JUDGMENT AND NOBODY HAD CHECKED WHICH PART OF IT WAS. The same test that showed the dictionary stopping a step short works the other way round and is stronger there. Asked about the dictionary it found a source being incomplete, which is allowed. Asked about the store it finds a sentence naming as a root a word that is not one, which is the single thing these explanations exist to prevent - a reader is told where a word comes from and handed a form it does not come from.";
  "A claim is only counted when the dictionary has actually been asked about the named root and gives it a source of its own. Silence proves nothing either way and is left alone; a dictionary calling the named root its own root agrees with the store and is left alone too.";
  "This leans on the dictionary being right about derivation, which was measured beside this and came back standing apart from a store that never argues with itself on 10 words in 5612. It does not lean on the dictionary reaching the final root, which it was measured not to do about one time in six, because a word shown to come from anything at all is shown not to be a root whatever sits further back.";
  "Measured: of 305 outvoted claims, 98 are proven this way - and every one of the 43 shallower ones is, without exception, covering 118 chapter entries. That is a whole category settled rather than a sample of it. The rest are 28 of the 78 apart, 15 of the 140 deeper, and 12 of the 44 kin.";
  "The 43 are not 43 mistakes. They are one habit: the causative pa is being kept inside the root. Store sentences name pabilin, paminaw, pasalamat, padayon, pahulay, pahimutang, pahayag, palibot, pahunong, pahimulos, patalinghog, paila, pasaylo, pagawas, padala, padulong and padayag as roots, and the dictionary takes every one of them back a step further. A few more keep ka the same way, in kalimot and kamingaw, and a handful name the word itself. One rule wrongly learned, repeated across a hundred and eighteen entries.";
  "What is proven is that the named form is derived, and that is not the same as the deeper form being what a reader should be given. Babaye is taken back to baye and paminaw to minaw, and neither baye nor minaw is a word anybody writes on its own. So these rows say the store is wrong to stop where it stops; they do not by themselves say the dictionary is where it should stop instead.";
  "Nothing is asked of the site and nothing is written.";
  arguments_assert(arguments, 0);
  let measured = await app_ceb_bible_gloss_roots_store_outvoted_claims();
  let listed = property_get(measured, "listed");
  let known = await binisaya_words_known();
  let proven = [];
  let by_relation = {};
  function claim_read(claim) {
    let said = property_get(claim, "said");
    let held = property_get_or_null(known, said);
    let unasked = null_is(held);
    if (unasked) {
      return;
    }
    let deeper = property_get(held, "root");
    let silent = equal(deeper, "");
    if (silent) {
      return;
    }
    let folded_said = gloss_word_folded(said);
    let folded_deeper = gloss_word_folded(deeper);
    let itself = equal(folded_said, folded_deeper);
    if (itself) {
      return;
    }
    let relation = property_get(claim, "relation");
    let before = property_get_or_null(by_relation, relation);
    let none = null_is(before);
    let count = none ? 0 : before;
    let value = add(count, 1);
    property_set(by_relation, relation, value);
    list_add(proven, {
      word: property_get(claim, "word"),
      said: said,
      under_it: deeper,
      dictionary: property_get(claim, "dictionary"),
      relation: relation,
      chapters: property_get(claim, "count"),
    });
  }
  each(listed, claim_read);
  let r = {
    claims: list_size(listed),
    proven: list_size(proven),
    by_relation: by_relation,
    rows: proven,
  };
  return r;
}
