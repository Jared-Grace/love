import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_vouching_corroborated_witness_count() {
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let spellings = object_property_names(known);
  let witnesses = {};
  function witness_note(spelling) {
    let entry = property_get(known, spelling);
    let nothing = null_is(entry);
    if (nothing) {
      return;
    }
    let analysed = property_get_or_null(entry, "analysed");
    if (not(analysed)) {
      return;
    }
    let root = property_get_or_null(entry, "root");
    let unwritten = null_is(root);
    if (unwritten) {
      return;
    }
    let bare = gloss_word_bare(root);
    let blank = text_empty_is(bare);
    if (blank) {
      return;
    }
    let key = gloss_word_folded(bare);
    let held = property_get_or_null(witnesses, key);
    if (null_is(held)) {
      held = [];
      property_set(witnesses, key, held);
    }
    list_add(held, spelling);
  }
  each(spellings, witness_note);
  let named_roots = object_property_names(witnesses);
  let named_once = 0;
  let named_more = 0;
  function witness_count(key) {
    let held = property_get_or_null(witnesses, key);
    if (null_is(held)) {
      let r = 0;
      return r;
    }
    let once = list_unique(held);
    let size = list_size(once);
    return size;
  }
  let r2 = {
    witnesses,
    named_roots,
    named_once,
    named_more,
    witness_count,
  };
  return r2;
}
