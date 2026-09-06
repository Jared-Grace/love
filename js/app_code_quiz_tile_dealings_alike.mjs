import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tile_dealings_or_null } from "./app_code_quiz_tile_dealings_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_quiz_dealing_alike_is } from "./app_code_quiz_dealing_alike_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_quiz_tile_dealings_alike(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("Every line the unscramble's own tiles can be made to spell by handing each tile round among the places of its own kind, kept only where the line still comes out to what the learner was shown and still says it the same way - and each written line once, however many dealings happened to reach it.");
  ("Both makers of alternative answers are this list narrowed, and neither of them walks a dealing or writes a line of its own. The pool keeps the ones a learner may be offered; the checker keeps the ones the pool refused. That is what lets the checker be a check: a hole it reports is a line the pool really is missing, rather than the two of them having looked in different places.");
  ("The bound on how far to walk is the walker's, so a line too long to deal declines here and both callers decline with it.");
  let none = [];
  let dealt_from = app_code_quiz_tile_dealings_or_null(code);
  let unwalkable = null_is(dealt_from);
  if (unwalkable) {
    return none;
  }
  let dealings = property_get(dealt_from, "dealings");
  let codes = [];
  function keep(dealt) {
    let written = list_join_space(dealt);
    let alike = app_code_quiz_dealing_alike_is(code, written);
    if (alike) {
      list_add(codes, written);
    }
  }
  each(dealings, keep);
  let unique = list_unique(codes);
  return unique;
}
