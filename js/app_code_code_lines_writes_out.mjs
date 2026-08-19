import { app_code_code_output } from "./app_code_code_output.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_of_code } from "./app_code_label_of_code.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_code_value_logged_output } from "./app_code_value_logged_output.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_code_dark_lines_comments } from "./app_code_code_dark_lines_comments.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_code_lines_writes_out(parent, lines, value) {
  arguments_assert(arguments, 3);
  ("a program and what it writes out, the pair a lesson shows in a box read before the questions start");
  ("It is drawn as the card the worked example is drawn as, because it is the same thing: this code, and what came out of it. A learner who has read that card once reads this one without going back to the labels. What the example has beside it is a button asking for another example, and a box whose code never changes does not get one - which is the difference between the two, and the only one.");
  ("A program of one line is handed over as a list of one. The pair is the same pair whether the program is one line or four, and a caller choosing between two functions by counting its own lines would be choosing between them by something that is not the difference.");
  ("The code is painted by the writer that dims a note, which for a program holding no note draws exactly what the plain writer drew. It is the one used here rather than the plain one so that a note is dimmed wherever a program is shown, instead of only on the screen that happens to teach notes - a note drawn as ordinary code in a later lesson would be telling a learner the thing was different only that once.");
  let code = list_join_newline(lines);
  let value2 = app_code_value_logged_output();
  let output_label = app_code_label_of_code(value2);
  let code_label = app_code_label_code_question();
  let container = app_code_code_output(
    parent,
    code_label,
    code,
    app_code_code_dark_lines_comments,
    output_label,
    value,
    app_code_style_normal_text,
  );
  return container;
}
