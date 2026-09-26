import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_two } from "./app_code_lesson_statement_name_two.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { text_empty } from "./text_empty.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { app_code_note_div_cycle_code } from "./app_code_note_div_cycle_code.mjs";
import { app_code_lesson_cups_row_holding } from "./app_code_lesson_cups_row_holding.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_name_no_quotes_box } from "./app_code_lesson_name_no_quotes_box.mjs";
export function app_code_lesson_statement_name_copy_single_above(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: the two-names program, then the same program with the second word changed to the first name, then what the missing quote marks do");
  ("The reminder is the two-names lesson because this line is that one with a single change - the second name is given the first name instead of a word. Both programs are three lines, so nothing is added but the one change.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let word_first = app_code_lesson_statement_name_value_word();
  let word_last = app_code_lesson_statement_name_two_word();
  let quoted_first = app_code_string_code(word_first);
  let quoted_last = app_code_string_code(word_last);
  let held_first = js_code_let_statement(name_first, quoted_first);
  let held_last = js_code_let_statement(name_last, quoted_last);
  let copied = js_code_let_statement(name_last, name_first);
  let logged = js_code_console_log_statement(name_last);
  let box_two = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_two,
    context,
    app_code_lesson_statement_name_two,
    ["two names can hold two words (", held_last, "):"],
  );
  app_code_code_lines_writes_out(
    box_two,
    [held_first, held_last, logged],
    word_last,
  );
  ("the cup story comes before the code, the way the lesson that copies into a third cup tells it, because this is the first lesson where one name is given another name - so it is where a learner first wonders whether the first name loses its word. The story never pours: someone looks inside one cup and fetches more of the same, which is what the code does, at the human's request");
  let names = [name_first, name_last];
  let nothing = text_empty();
  let cup_first = [word_first, name_first];
  let box_cups = app_code_container_light_blue(root);
  let has_first = list_join_empty([" has ", word_first, " and cup "]);
  app_code_note_div_cycle_code(
    box_cups,
    ["Suppose cup ", name_first, has_first, name_last, " is empty"],
    names,
  );
  app_code_lesson_cups_row_holding(
    box_cups,
    [cup_first, [nothing, name_last]],
    names,
  );
  app_code_note_div_cycle_code(
    box_cups,
    [
      "Suppose you asked someone to look inside cup ",
      name_first,
      ", and whatever was in cup ",
      name_first,
      ", also put some in cup ",
      name_last,
    ],
    names,
  );
  let found = list_join_empty([
    " has ",
    word_first,
    ", so suppose they found some more ",
    word_first,
    " and put those ",
    word_first,
    " in cup ",
  ]);
  app_code_note_div_cycle_code(
    box_cups,
    ["Cup ", name_first, found, name_last],
    names,
  );
  app_code_lesson_cups_row_holding(
    box_cups,
    [cup_first, [word_first, name_last]],
    names,
  );
  let removed = list_join_empty(["No ", word_first, " were removed from cup "]);
  let other = list_join_empty([
    ": the person found some other ",
    word_first,
    " to put in cup ",
  ]);
  app_code_note_div_cycle_code(
    box_cups,
    [removed, name_first, other, name_last],
    names,
  );
  let box_copy = app_code_container_light_blue(root);
  html_div_cycle_code(box_copy, [
    "A name (",
    name_last,
    ") can also hold what another name (",
    name_first,
    ") holds (",
    copied,
    " instead of ",
    held_last,
    "):",
  ]);
  app_code_code_lines_writes_out(
    box_copy,
    [held_first, copied, logged],
    word_first,
  );
  app_code_lesson_name_no_quotes_box(
    root,
    name_first,
    name_last,
    word_first,
    names,
  );
}
