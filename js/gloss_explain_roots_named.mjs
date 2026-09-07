import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
export function gloss_explain_roots_named(explain) {
  "Every root a gloss explanation names, read in any of the three wordings the store actually uses for it.";
  "$plain explain";
  "the explanation is the sentence a reader sees under a word. Nothing here runs it or writes it.";
  "★ THE READER BESIDE THIS ONE ANSWERS ABOUT ONE WORDING AND WAS BEING READ AS ANSWERING ABOUT THE STORE. It matches the word root followed by a quoted word, and its own prose says so and tells a caller to fall back to a weaker test on an empty answer. Four readings built on it did not fall back, so an explanation writing it is built on 'buhat', to do, with 'gi-' in front was counted as naming no root, and the word it named was counted as unexplained.";
  "Measured on 2026-09-07 over the 258651 entries in the store: 42484 name a root with the word root, and a further 13184 name one with built on and no other wording.";
  "The third wording was found by reading what was still called bare after the first two were allowed for, and it is the plainest of them: the headword in quotes, is, then the root in quotes - 'Gibuhat' is 'buhat', to do, with 'gi-' in front. It is only read at the very start of the explanation, because that is the one place the first quoted word is certainly the word being explained. Later in a sentence the same shape is ordinary prose about something else.";
  "The wordings are asked strictest first and the first answer is handed back whole, so nothing that was already read changes and no explanation turns one claim into two.";
  "Three wordings and no more, because those are the three the corpus writes. A fourth, if one is found, belongs here rather than in a caller.";
  arguments_assert(arguments, 1);
  let claimed = gloss_explain_roots_claimed(explain);
  let claimed_count = list_size(claimed);
  let claimed_empty = equal(claimed_count, 0);
  if (not(claimed_empty)) {
    return claimed;
  }
  let built_pattern = new RegExp(
    "built on\\s+['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let built = text_regex_first_groups(explain, built_pattern);
  let built_count = list_size(built);
  let built_empty = equal(built_count, 0);
  if (not(built_empty)) {
    return built;
  }
  let self_pattern = new RegExp(
    "^\\s*['‘\"][^'’\"]+['’\"] is ['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let self_named = text_regex_first_groups(explain, self_pattern);
  return self_named;
}
