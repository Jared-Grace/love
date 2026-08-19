import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { binisaya_affixes_plain_kinds } from "./binisaya_affixes_plain_kinds.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { binisaya_affixes_pieces } from "./binisaya_affixes_pieces.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_explain_affixes_claimed } from "./gloss_explain_affixes_claimed.mjs";
import { binisaya_affix_letters } from "./binisaya_affix_letters.mjs";
import { binisaya_affix_piece_kind } from "./binisaya_affix_piece_kind.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { gloss_affix_letters_relation } from "./gloss_affix_letters_relation.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_entries_affix_letters_wrong_entry_read(word_key, known) {
  arguments_assert(arguments, 2);
  let explain_key = gloss_entry_explain_key();
  let wrong = [];
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
      let kind = property_get(claim, "kind");
      let quoted = property_get(claim, "letters");
      let letters = binisaya_affix_letters(quoted);
      function kind_is(piece) {
        let piece_kind = binisaya_affix_piece_kind(piece);
        let matching = equal(piece_kind, kind);
        return matching;
      }
      let of_kind = list_filter(pieces, kind_is);
      let none = list_empty_is(of_kind);
      if (none) {
        return;
      }
      let given = list_map(of_kind, binisaya_affix_letters);
      let agreed = list_includes(given, letters);
      if (agreed) {
        return;
      }
      function relation_read(one) {
        let read = gloss_affix_letters_relation(one, letters, word);
        return read;
      }
      let relations = list_map(given, relation_read);
      let near = list_includes(relations, "inside");
      let held_deeper = list_includes(relations, "deeper");
      let relation = near ? "inside" : held_deeper ? "deeper" : "apart";
      let claim_wrong = {
        kind,
        quoted,
        given,
        relation,
      };
      list_add(said, claim_wrong);
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
  let r = {
    wrong,
    entry_read,
  };
  return r;
}
