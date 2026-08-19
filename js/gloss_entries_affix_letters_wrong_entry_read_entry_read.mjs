import { gloss_affix_claim_wrong_add } from "./gloss_affix_claim_wrong_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { binisaya_affixes_plain_kinds } from "./binisaya_affixes_plain_kinds.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { binisaya_affixes_pieces } from "./binisaya_affixes_pieces.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_explain_affixes_claimed } from "./gloss_explain_affixes_claimed.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_entries_affix_letters_wrong_entry_read_entry_read(
  word_key,
  known,
  explain_key,
  wrong,
) {
  arguments_assert(arguments, 4);
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let held = binisaya_words_known_get(known, word);
    if (null_is(held)) {
      return;
    }
    let analysed = property_get(held, "analysed");
    if (not(analysed)) {
      return;
    }
    let affixes = property_get(held, "affixes");
    let given_kinds = binisaya_affixes_plain_kinds(affixes);
    let unread = list_empty_is(given_kinds);
    if (unread) {
      return;
    }
    let pieces = binisaya_affixes_pieces(affixes);
    let explain = property_get(entry, explain_key);
    let explain2 = text_lower_to(explain);
    let claimed = gloss_explain_affixes_claimed(explain2);
    let said = [];
    function claim_read(claim) {
      gloss_affix_claim_wrong_add(claim, pieces, word, said);
    }
    each(claimed, claim_read);
    let clean = list_empty_is(said);
    if (clean) {
      return;
    }
    let root = property_get(held, "root");
    let finding = {
      word,
      root,
      affixes,
      said,
      explain,
    };
    list_add(wrong, finding);
  }
  return entry_read;
}
