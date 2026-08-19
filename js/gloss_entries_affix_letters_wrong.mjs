import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { binisaya_affix_letters } from "./binisaya_affix_letters.mjs";
import { binisaya_affix_piece_kind } from "./binisaya_affix_piece_kind.mjs";
import { binisaya_affixes_pieces } from "./binisaya_affixes_pieces.mjs";
import { binisaya_affixes_plain_kinds } from "./binisaya_affixes_plain_kinds.mjs";
import { each } from "./each.mjs";
import { gloss_affix_letters_relation } from "./gloss_affix_letters_relation.mjs";
import { equal } from "./equal.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_explain_affixes_claimed } from "./gloss_explain_affixes_claimed.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function gloss_entries_affix_letters_wrong(entries, known) {
  "The explanations in one passage that quote letters for a piece of their word which the dictionary gives no piece of that kind holding.";
  "This is the blindness left behind by the check on kind names. That one asks only whether a name is used where the dictionary gives no piece of that kind at all, so a word the dictionary does build with a prefix passes however wrong the prefix quoted for it is - the reader is handed made-up letters and told confidently what they mean, and nothing objects. Reading the letters the explanation actually quoted is what closes it, and it is the same repair the root check needed for the same reason: a test satisfied by a word being present is satisfied by the wrong word being present.";
  "A claim whose kind the dictionary gives no piece of is passed over here rather than reported twice. The check on kind names already answers that one, and a finding counted in two sweeps makes both of their numbers a lie.";
  "Where the dictionary gives more than one piece of a kind, a claim agreeing with any of them agrees. Nothing here says which piece the explanation was talking about, so the kindest reading is the only honest one. How the letters stand to one another is read the same way, from the nearest of the pieces given.";
  "How the two sets of letters stand is carried back beside them, because the count alone would say the same thing about a piece off by a letter as about one nobody could have got from the word. Half of what a sweep like this finds is the first, and a reader taking the number for the second would throw away prose that is very nearly right.";
  "A word the dictionary says nothing about, or takes apart in a shorthand nobody here has read, is passed over rather than judged - the same rule the kind-name check is held to, for the same reason: the explaining machine was never told either of those things.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let wrong = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let held = property_get_or_null(known, word);
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
  each(entries, entry_read);
  return wrong;
}
