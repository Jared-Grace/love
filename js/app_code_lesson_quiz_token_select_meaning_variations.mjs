import { js_code_same_meaning_is } from "./js_code_same_meaning_is.mjs";
import { not } from "./not.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { catch_null } from "./catch_null.mjs";
import { list_join } from "./list_join.mjs";
import { null_is } from "./null_is.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_code_lesson_quiz_token_select_meaning_variations(code) {
  "Every rearrangement of the SAME tiles that says the SAME thing - so the unscramble accepts any right ordering, not just the one it was written in. `1 < 3 - 1` and `1 - 1 < 3` are built from the identical tiles and say the same thing, so both are right. The commutative-swap variations only move sides of a commutative node; this moves any tile anywhere. Every ordering is the same multiset of tiles, so it can never accept an answer the learner could not have built.";
  "Bounded by permuting all tiles (n!) and evaluating each: cheap because these are flat 3-operand expressions (5 tiles, 120 orderings), most of which do not parse and are dropped. Above a small tile cap it declines rather than blow the factorial up, and a code that does not itself evaluate (an identifier, a call, anything with side effects) yields no target and so no variations.";
  let tokens = app_code_quiz_tokens(code);
  let semicolon = ";";
  let has_semicolon = list_last_is(tokens, semicolon);
  if (has_semicolon) {
    list_remove_last(tokens);
  }
  let size = list_size(tokens);
  let cap = 7;
  let too_big = greater_than(size, cap);
  let too_small = less_than(size, 3);
  if (too_big) {
    let r = [];
    return r;
  }
  if (too_small) {
    let r2 = [];
    return r2;
  }
  let separator = " ";
  let target = app_code_quiz_tokens_value(tokens);
  let no_target = null_is(target);
  if (no_target) {
    let r5 = [];
    return r5;
  }
  let perms = list_permutations(tokens);
  function join_code(perm) {
    let joined = list_join(perm, separator);
    return joined;
  }
  ("Landing on the right value is not enough on its own, and a line that comes out false is where it fails worst. 11 - 3 === 44 / 4 is false, and so are 11 - 3 === 4 / 44 and 11 === 3 - 44 / 4 and a hundred and forty others built from the same tiles - every one of them was being marked right, because every one of them is false. What the learner was asked to build is a sentence, so the sentence is what is checked.");
  ("The value is still asked first, and only as the cheap half of the pair. Two lines that say the same thing always come out the same, so an ordering that comes out differently can be dropped before anything is read of it, and the reading is left with the few that got that far.");
  function matches(perm) {
    let value = value_of(perm);
    let same = equal(value, target);
    if (not(same)) {
      return false;
    }
    let joined = join_code(perm);
    let said_alike = js_code_same_meaning_is(code, joined);
    return said_alike;
  }
  let good = list_filter(perms, matches);
  let unique = list_map_unique(good, join_code);
  return unique;
}
