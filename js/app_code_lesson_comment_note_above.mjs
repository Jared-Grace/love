import { add } from "./add.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_comment_start } from "./js_comment_start.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_comment_note_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: a line a learner already knows, that same line with a note written above it, and then what the two slashes are");
  ("The same line twice, and the same answer twice. That is the whole lesson - a note changes nothing about what the program does - and it is shown by leaving everything else untouched, so there is only one thing between the two boxes that could account for anything.");
  ("The answer is what proves it rather than a sentence saying so. A learner reads the second card, finds the number they read a box ago, and has seen the fact instead of being told it.");
  ("The two slashes are named last. A learner meeting the symbol first would have nothing to attach it to; meeting it after the two cards, they have already seen the line it made and the nothing it did.");
  ("The numbers here are in none of the programs the questions ask about, so no number a learner works out on this screen turns up later as something to recognise rather than to read.");
  let plus = js_operator_plus_symbol();
  let first = 10;
  let last = 20;
  let total = add(first, last);
  let added = js_code_binary_spaced_nb(first, plus, last);
  let logged = js_code_console_log_statement(added);
  let box_plain = app_code_container_light_blue(root);
  html_div_cycle_code(box_plain, [
    "Remember, we can write out what two numbers add up to",
  ]);
  app_code_code_lines_writes_out(box_plain, [logged], total);
  let box_note = app_code_container_light_blue(root);
  html_div_cycle_code(box_note, ["We can write a note above the line"]);
  ("the note says what the line below it does, because that is what a note is for. A note reading anything else would be teaching the shape and leaving the use of it to be guessed at.");
  let note = js_code_comment_line("add ten and twenty");
  app_code_code_lines_writes_out(box_note, [note, logged], total);
  html_div_cycle_code(box_note, ["The answer did not change"]);
  let slashes = js_comment_start();
  let box_slashes = app_code_container_light_blue(root);
  html_div_cycle_code(box_slashes, [
    "A note starts with two slashes (",
    slashes,
    ")",
  ]);
  html_div_cycle_code(box_slashes, [
    "The computer skips the rest of that line",
  ]);
  html_div_cycle_code(box_slashes, [
    "A note is there for people reading the code",
  ]);
}
