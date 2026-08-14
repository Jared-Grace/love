import { and } from "./and.mjs";
import { or } from "./or.mjs";
import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { app_code_lessons_unscramble_codes } from "./app_code_lessons_unscramble_codes.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { app_code_quiz_variation_buildable_is } from "./app_code_quiz_variation_buildable_is.mjs";
import { js_tokens_parenthesis_group_sizes } from "./js_tokens_parenthesis_group_sizes.mjs";
import { js_expression_is } from "./js_expression_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { list_tally_covers_is } from "./list_tally_covers_is.mjs";
import { list_unique } from "./list_unique.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_quiz_unscramble_shortcut_accepted(rounds) {
  "Every unscramble that will accept an answer spelled with less in it than the question - a token left out, or the brackets moved off what the question bracketed. The learner gets past the question without doing the thing it was asking.";
  "The other gate in this family asks whether the pool is missing the taught line. This asks the opposite of the same pool: whether it holds a line that is easier than the taught one. Both were paid for by a real lesson, and both went unnoticed for the same reason - every accepted ordering said the right thing, so every check that read meaning agreed. Meaning is not the subject of a lesson about how a line is spelled.";
  "The two ways of being easier are asked separately because they read differently to a learner. Leaving a token out is the loud one - a bracket lesson accepting a line with no brackets in it, or a statement lesson accepting the line without its semicolon. Moving a bracket is the quiet one, because the tiles all get used and only the grouping is wrong: (3 === 5) === false and (3) === 5 === false are one line by value and two different answers to the question actually asked.";
  "A bracket is asked how much it gathered, not which tiles. Rearranging the tiles is the thing the learner was asked to do, so a bracket that ends up around a different comparison of the same size is not an easier answer - and whether the rearranged line still says what the question said is the other gate's business, not this one's.";
  "An ordering the learner has no button for is passed over. It cannot be pressed, so it is not an answer, and reporting it would fill this with orderings nobody could reach.";
  "A trailing semicolon is taken off the question when the question is an expression, because the pool has already had it taken off there. Comparing the two on different footings would report every such line as a fault and say nothing true.";
  let asked = app_code_lessons_unscramble_codes(rounds);
  let found = [];
  for (let item of asked) {
    let code = property_get(item, "code");
    let lesson = property_get(item, "lesson");
    let tokens = app_code_quiz_tokens(code);
    let expression_is = js_expression_is(code);
    let semicolon = ";";
    let has_semicolon = list_last_is(tokens, semicolon);
    let trim = and(expression_is, has_semicolon);
    if (trim) {
      list_remove_last(tokens);
    }
    let offered = list_unique(tokens);
    let groups = js_tokens_parenthesis_group_sizes(tokens);
    let variations = app_code_lesson_quiz_token_select_variations(code);
    for (let variation of variations) {
      let buildable = app_code_quiz_variation_buildable_is(variation, offered);
      if (not(buildable)) {
        continue;
      }
      let covers = list_tally_covers_is(variation, tokens);
      let groups_variation = js_tokens_parenthesis_group_sizes(variation);
      let bracketed_alike = lists_equal_pair(groups_variation, groups);
      let covers_not = not(covers);
      let bracketed_alike_not = not(bracketed_alike);
      let shortcut = or(covers_not, bracketed_alike_not);
      if (shortcut) {
        let separator = " ";
        list_add(found, {
          lesson,
          code,
          accepted: list_join(variation, separator),
        });
      }
    }
  }
  return found;
}
