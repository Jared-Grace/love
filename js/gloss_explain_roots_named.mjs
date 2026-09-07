import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
export function gloss_explain_roots_named(explain) {
  "Every root a gloss explanation names, read in any of the four wordings the store uses for it.";
  "$plain explain";
  "the explanation is the sentence a reader sees under a word. Nothing here runs it or writes it.";
  "★ THE STRICT READER BESIDE THIS ONE ANSWERS ABOUT ONE WORDING AND WAS BEING READ AS ANSWERING ABOUT THE STORE. It matches the word root followed by a quoted word, and its own prose says so and tells a caller to fall back to a weaker test on an empty answer. Four readings built on it did not fall back, so an explanation writing it is built on 'buhat', to do names exactly the same root and was counted as naming none, and the word it named was counted as unexplained there.";
  "The store has no one way of saying it, and that is the finding rather than a detail of this function. Measured on 2026-09-07 over its 258651 entries: 42484 say the root is 'buhat', a further 13184 say built on 'buhat', and a further 10378 say 'Gibuhat' is 'buhat'. The fourth, means was done, from 'buhat', was found by reading what those three still left called bare. Each round found exactly one more, and each was only visible once the one before it had been taken out of the way.";
  "The wordings are asked strictest first and the first answer is handed back whole, so nothing that was already read changes and no explanation turns one claim into two.";
  "The third is only read at the very start of the explanation, because that is the one place the first quoted word is certainly the word being explained. Later in a sentence the same shape is ordinary prose about something else.";
  "Four wordings and no more, because those are the four the corpus writes. Each round of this found exactly one more, so a fifth is likelier than not, and it belongs here rather than in a caller.";
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
  let self_count = list_size(self_named);
  let self_empty = equal(self_count, 0);
  if (not(self_empty)) {
    return self_named;
  }
  let from_pattern = new RegExp(
    "from\\s+['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let from_named = text_regex_first_groups(explain, from_pattern);
  return from_named;
}
