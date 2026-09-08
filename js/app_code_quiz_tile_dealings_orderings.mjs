import { arguments_assert } from "./arguments_assert.mjs";
import { js_expression_is } from "./js_expression_is.mjs";
import { not } from "./not.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_quiz_token_kind } from "./app_code_quiz_token_kind.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_copy } from "./list_copy.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_quiz_tile_dealings_or_null } from "./app_code_quiz_tile_dealings_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_quiz_dealing_alike_is } from "./app_code_quiz_dealing_alike_is.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_quiz_tile_dealings_orderings(orderings, code) {
  "$plain code";
  arguments_assert(arguments, 2);
  ("Every line the tiles of any one of these orderings can be dealt into - each tile handed round among the places of its own kind - kept only where the line is still a right answer to the question the orderings all came from.");
  ("IT DEALS THE ORDERINGS AND NOT ONLY THE QUESTION, and that is the whole reason it exists. A dealing leaves every parenthesis where it found it, so it can hand values and signs round inside a bracket but can never move the bracket; the maker of orderings can exchange the two sides of a sign, which moves a bracket across it but leaves the values it holds alone. Each road forbids what the other one is for, and a learner who needs both was told they were wrong: shown true and the tiles of (true && true) || false, the answer true || (false && true) needs the sides of the or exchanged AND the values dealt, and neither road on its own could reach it.");
  ("The judging is against the question rather than against the ordering being dealt. An ordering is only another way of writing the question, so the question is what a learner's answer has to agree with, and asking each dealing about the ordering it happened to come from would let a chain of small agreements drift away from the line that was actually asked.");
  ("ONE ORDERING IS DEALT PER SKELETON, because dealing depends on nothing else. What a dealing can reach is settled by where the unmovable tiles stand and by which tiles there are to hand round - so two orderings whose parentheses sit in the same places and whose tiles are the same bag reach exactly the same lines, and dealing both walks the second one for nothing. Without this the work is the number of orderings times the size of a dealing, and the orderings are themselves mostly dealings of each other.");
  ("Only a line standing for a value is dealt at all, for the reason the walker gives: a statement has no value the learner was shown, so a dealing of one agrees with nothing.");
  let none = [];
  let expression_is = js_expression_is(code);
  if (not(expression_is)) {
    return none;
  }
  let keys_seen = [];
  let written_kept = [];
  function deal(ordering) {
    let tokens = app_code_quiz_tokens(ordering);
    let kinds = list_map(tokens, app_code_quiz_token_kind);
    let skeleton = list_join_space(kinds);
    let list = list_copy(tokens);
    let bag = list_sort_text(list);
    let bag_written = list_join_space(bag);
    let key = text_combine_multiple([skeleton, " | ", bag_written]);
    let walked_already = list_includes(keys_seen, key);
    if (walked_already) {
      return;
    }
    list_add(keys_seen, key);
    let dealt_from = app_code_quiz_tile_dealings_or_null(ordering);
    let unwalkable = null_is(dealt_from);
    if (unwalkable) {
      return;
    }
    let dealings = property_get(dealt_from, "dealings");
    function keep(dealt) {
      let written = list_join_space(dealt);
      let alike = app_code_quiz_dealing_alike_is(code, written);
      if (alike) {
        list_add(written_kept, written);
      }
    }
    each(dealings, keep);
  }
  each(orderings, deal);
  let unique = list_unique(written_kept);
  return unique;
}
