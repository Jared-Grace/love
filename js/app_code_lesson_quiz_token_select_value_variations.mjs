import { list_last } from "./list_last.mjs";
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
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_lesson_quiz_token_select_value_variations(code) {
  "Every rearrangement of the SAME tiles that computes the SAME value - so the unscramble accepts any valid ordering, not just the one it was written in. `1 < 3 - 1` and `1 - 1 < 3` are built from the identical tiles and both are true, so both are right. The commutative-swap variations only move sides of a commutative node; this moves any tile anywhere. Every ordering is the same multiset of tiles, so it can never accept an answer the learner could not have built, and a wrong VALUE is rejected by the value check.";
  "Bounded by permuting all tiles (n!) and evaluating each: cheap because these are flat 3-operand expressions (5 tiles, 120 orderings), most of which do not parse and are dropped. Above a small tile cap it declines rather than blow the factorial up, and a code that does not itself evaluate (an identifier, a call, anything with side effects) yields no target and so no variations.";
  let tokens = app_code_quiz_tokens(code);
  let semicolon = ";";
  let last = list_last(tokens);
  let has_semicolon = equal(last, semicolon);
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
  function value_of(token_list) {
    function run() {
      let source = list_join(token_list, separator);
      let r3 = eval(source);
      return r3;
    }
    let r4 = catch_null(run);
    return r4;
  }
  let target = value_of(tokens);
  let no_target = null_is(target);
  if (no_target) {
    let r5 = [];
    return r5;
  }
  let perms = list_permutations(tokens);
  function matches(perm) {
    let value = value_of(perm);
    let same = equal(value, target);
    return same;
  }
  let good = list_filter(perms, matches);
  function join_code(perm) {
    let joined = list_join(perm, separator);
    return joined;
  }
  let codes = list_map(good, join_code);
  let unique = list_unique(codes);
  return unique;
}
