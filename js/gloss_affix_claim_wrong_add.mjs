import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_affix_letters } from "./binisaya_affix_letters.mjs";
import { binisaya_affix_piece_kind } from "./binisaya_affix_piece_kind.mjs";
import { equal } from "./equal.mjs";
import { gloss_affix_letters_relation } from "./gloss_affix_letters_relation.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_affix_claim_wrong_add(claim, pieces, word, said) {
  arguments_assert(arguments, 4);
  ("One thing an explanation claims about a word's affixes, checked against the affixes the word was actually given, and written down among the wrong ones when the two disagree.");
  ("A claim names a kind of affix and quotes the letters it says stand there. Only the pieces of that same kind are compared against, because a claim about a prefix says nothing about what the suffixes are - and where the word carries no piece of that kind at all, the claim is about something the reading cannot see and is left alone rather than called wrong.");
  ("Agreeing with any one of the given pieces is enough. A word may carry several affixes of one kind, and a claim quoting any of them is telling the truth about that one; asking it to match all of them would call every honest claim about a word with two prefixes wrong.");
  ("How far apart the two are is said as well as that they differ, because the three answers ask for quite different repairs. Letters standing inside a given piece are a claim that stopped short, letters holding a given piece are a claim that reached too far, and letters sharing nothing with it are a claim about a piece the word does not have. The nearest of those readings wins, since one right-ish comparison is what the reader will look at.");
  ("Nothing is handed back. The wrong ones are added to the list they were given, which is what lets a reader walk a whole passage and end with one list rather than many.");
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
