import { list_join_empty } from "./list_join_empty.mjs";
import { text_empty } from "./text_empty.mjs";
import { app_code_lesson_statement_name_copy_code_box } from "./app_code_lesson_statement_name_copy_code_box.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_cups_row_holding } from "./app_code_lesson_cups_row_holding.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_name_no_quotes_box } from "./app_code_lesson_name_no_quotes_box.mjs";
import { app_code_lesson_statement_name_copy_name } from "./app_code_lesson_statement_name_copy_name.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_name_copy_above(root) {
  arguments_assert(arguments, 1);
  ("the cup boxes read before the first question: two cups got and then filled, a third cup got and then filled from one of them, and nothing taken out of anything");
  ("Every cup is drawn empty before it is drawn full, and the two are said in two sentences. Getting a cup and putting something in it are two things a person does, and the whole lesson is about the second one happening to a cup that already exists - so a row of full cups appearing at the word suppose would be the two steps shown as one, and the one being taught is the one that got hidden.");
  ("Nothing that has already been drawn moves. Each row is the row above it with one cup changed, standing in the same place, so what a learner has to see is the only thing that is different - and a cup that shifted along would be a second difference with nothing to say.");
  ("The filling is done by a person who is asked to go and look. A cup cannot be poured into another cup without emptying, which is exactly the reading the lesson has to prevent, so the story never pours: someone looks inside one cup, sees what is there, and fetches more of the same. That is what the code does, said in a way a learner can watch.");
  ("It is said twice that the first cup lost nothing - once in what the person did, and once flatly afterwards. This is the one thing every learner gets wrong here, and it is worth the second line.");
  ("The third cup is a new cup rather than one of the two, so the screen never has to say that a name was given something twice. That was the lesson before, it is settled, and putting it here would give a learner two reasons for a word to have moved.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let name_copy = app_code_lesson_statement_name_copy_name();
  let word_first = app_code_lesson_statement_name_value_word();
  let word_last = app_code_lesson_statement_name_two_word();
  let nothing = text_empty();
  let cup_first = [word_first, name_first];
  let cup_last = [word_last, name_last];
  let box_have = app_code_container_light_blue(root);
  html_div_cycle_code(box_have, [
    "Suppose you had two cups, one called ",
    name_first,
    " and one called ",
    name_last,
  ]);
  app_code_lesson_cups_row_holding(box_have, [
    [nothing, name_first],
    [nothing, name_last],
  ]);
  ("the words for what is in a cup are joined into the writing around them rather than given as parts of their own. The parts alternate between plain writing and code, one and then the other all the way along, so a part standing in an odd place comes out dressed as code - and grapes is not code, it is what is in the cup. Only the names on the cups are code here.");
  let has_first = list_join_empty([" has ", word_first, " and cup "]);
  let has_last = list_join_empty([" has ", word_last]);
  html_div_cycle_code(box_have, [
    "Suppose cup ",
    name_first,
    has_first,
    name_last,
    has_last,
  ]);
  app_code_lesson_cups_row_holding(box_have, [cup_first, cup_last]);
  let box_new = app_code_container_light_blue(root);
  html_div_cycle_code(box_new, ["Suppose you have a third cup ", name_copy]);
  app_code_lesson_cups_row_holding(box_new, [
    cup_first,
    cup_last,
    [nothing, name_copy],
  ]);
  html_div_cycle_code(box_new, [
    "Suppose you asked someone to look inside cup ",
    name_first,
    ", and whatever was in cup ",
    name_first,
    ", also put some in cup ",
    name_copy,
  ]);
  let found = list_join_empty([
    " has ",
    word_first,
    ", so suppose they found some more ",
    word_first,
    " and put those ",
    word_first,
    " in cup ",
  ]);
  html_div_cycle_code(box_new, ["Cup ", name_first, found, name_copy]);
  app_code_lesson_cups_row_holding(box_new, [
    cup_first,
    cup_last,
    [word_first, name_copy],
  ]);
  let both = list_join_empty([" both have ", word_first, " in them"]);
  html_div_cycle_code(box_new, [
    "So now cups ",
    name_first,
    " and ",
    name_copy,
    both,
  ]);
  let removed = list_join_empty(["No ", word_first, " were removed from cup "]);
  let other = list_join_empty([
    ", they found some other ",
    word_first,
    " to put in cup ",
  ]);
  html_div_cycle_code(box_new, [removed, name_first, other, name_copy]);
  app_code_lesson_statement_name_copy_code_box(root);
}
