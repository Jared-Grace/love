import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_map } from "./list_map.mjs";
import { list_get } from "./list_get.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_max } from "./list_max.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_quiz_token_select_count_badge_style } from "./app_code_lesson_quiz_token_select_count_badge_style.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_lesson_quiz_token_select_counts_set(
  tokens_unique,
  chosen,
  variations,
  buttons,
) {
  arguments_assert(arguments, 4);
  ("say on a piece how many more times the line still wants it, so a row of one button per piece stops hiding that a piece is wanted twice.");
  ("THE ROW HOLDS ONE BUTTON PER PIECE AND NOT ONE PER TILE. A line wanting two sevens shows a single seven, and a learner reading the row has no way to tell it from a line wanting one. Asked (2 < 7) === (8 > 7) with the answer true, having built (2 <, a learner pressed 8 and was told they were wrong - correctly, because (2 < 8) can only be finished as === (7 > 7), which is false. The reason was on no part of the screen. A button per tile would say it, but the row is already as long as a phone is wide and the lines the course can ask are getting longer, so a mark on the piece has to carry it instead.");
  ("HOW MANY IS COUNTED OFF THE ORDERS STILL STANDING, not off the question. Every order in the pool is asked what it has left after the taps already made, and the most any of them still wants is the number shown. That number is therefore true of the pool whatever the pool holds - it does not rest on every order spelling the line out of the same tiles, and it falls as the pieces are used rather than standing at what the question began with.");
  ("MEASURED, the pool does hold one tally throughout: across the fifteen hundred and twenty-one unscrambles the course can ask and the three thousand six hundred and seventy-four orders they come to, not one order spelled the line with a different count of any piece. So the simpler reading off the question would have agreed everywhere today. It is not what is done, because the thing it rests on is a measurement rather than a rule, and the pool gains roads.");
  ("THE TIMES SIGN IS PART OF WHAT IS SHOWN, and it is not decoration. A two sitting up beside a seven is how mathematics writes seven squared, and this is a course about writing expressions - the one reader who must not misread it is the only reader it is for. The badge is dressed to be unmistakable on its own, and the times sign is the second lock on the same door: times two cannot be read as a power of anything.");
  ("NOTHING IS WRITTEN ON A PIECE WANTED ONCE. That is nearly every piece, and a number beside each of them would be a number to read on every tap that told the reader nothing. The mark is there to answer a question the row cannot otherwise answer, so it appears exactly where the question arises.");
  ("THE PIECE IS WRITTEN OUT AGAIN FROM SCRATCH EVERY TIME rather than the number being hunted down and changed. Setting the piece's own text is what clears the mark left from the tap before, so the two cannot come apart; and a row is eight or nine buttons, so there is nothing to be saved by being cleverer than that.");
  ("The pieces and their buttons stand in the same order, because the buttons were made from the pieces one for one.");
  let size = list_size(chosen);
  function remaining_tally(variation) {
    let skipped = list_skip(variation, size);
    let tallied = list_tally(skipped);
    return tallied;
  }
  let tallies = list_map(variations, remaining_tally);
  function each_button(b, index) {
    let token_each = list_get(tokens_unique, index);
    html_text_set(b, token_each);
    function count_in(tallied) {
      let n = property_get_or(tallied, token_each, 0);
      return n;
    }
    let counts = list_map(tallies, count_in);
    let most = list_max(counts);
    let many = greater_than(most, 1);
    let one_only = not(many);
    if (one_only) {
      return;
    }
    let spelled = text_from_number(most);
    let label = text_combine_multiple(["×", spelled]);
    let badge = html_span_text(b, label);
    app_code_lesson_quiz_token_select_count_badge_style(badge, b);
  }
  each_index(buttons, each_button);
}
