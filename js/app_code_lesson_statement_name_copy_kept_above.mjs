import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson_names } from "./app_code_remember_from_lesson_names.mjs";
import { app_code_lesson_statement_name_copy } from "./app_code_lesson_statement_name_copy.mjs";
import { app_code_lesson_cups_row_holding } from "./app_code_lesson_cups_row_holding.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_note_div_cycle_code } from "./app_code_note_div_cycle_code.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_note_name_mark } from "./app_code_note_name_mark.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
import { text_empty } from "./text_empty.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_lesson_statement_name_copy_kept_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: the two cups the copying lesson left standing, then one of them emptied and refilled while the other keeps what it was given, and then the same story as one program");
  ("The cups are the ones the copying lesson ended on, holding the same word, drawn the same way. A learner is being asked what happens next to a picture they have already watched being built, so nothing before the change is new and the change is the only thing to look at.");
  ("Only the first cup changes, and the second is drawn again unchanged beside it. The whole lesson is that the second cup did not follow the first, and a cup that vanished from the row while the sentence was being read would leave that to be taken on trust.");
  ("The taking out is said as a person doing it. The copying lesson was careful that nobody ever poured one cup into another; this screen is the one where something really is removed, and saying who removed it and from which cup keeps the two apart.");
  ("It is said flatly afterwards that nobody touched the second cup. That is the whole fact, and a learner who has just watched one cup change will look at the other one expecting it to have changed too.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_copy = app_code_lesson_statement_name_third();
  let word_first = app_code_lesson_statement_name_value_word();
  let word_last = app_code_lesson_statement_name_two_word();
  ("THE TWO NAMES ARE LENT COLOURS HERE, IN THE ORDER THE SCREEN INTRODUCES THEM. The cup that changes is met first and the cup that keeps its word second, which is also the order the program's notes at the bottom mark them in - and it has to stay that way, because the code box works its own order out from those notes rather than being handed this list.");
  ("Written out here rather than taken from the program, because the story starts several boxes above anything that could be read as code, and a colour arriving only at the program would be the joining work handed back to the reader.");
  ("The list is made before the first box rather than beside the cups, because the reminder above them says both names and says them first. A colour that started at the cups would leave the sentence carrying the story in from the previous lesson as the one plain mention on the screen - which is the joining work this list exists to take away, left in the place a reader meets first.");
  let names = [name_first, name_copy];
  let box_have = app_code_container_light_blue(root);
  app_code_remember_from_lesson_names(
    box_have,
    context,
    app_code_lesson_statement_name_copy,
    ["we gave cup ", name_copy, " whatever was in cup ", name_first],
    names,
  );
  app_code_lesson_cups_row_holding(
    box_have,
    [
      [word_first, name_first],
      [word_first, name_copy],
    ],
    names,
  );
  ("the word for what is in a cup is joined into the writing around it rather than given as a part of its own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and only the names on the cups are code here.");
  let both = list_join_empty(["So both cups have ", word_first, " in them"]);
  html_div_cycle_code(box_have, [both]);
  let box_change = app_code_container_light_blue(root);
  let took = list_join_empty([
    "Now suppose someone took the ",
    word_first,
    " out of cup ",
  ]);
  let put = list_join_empty([" and put ", word_last, " in instead"]);
  app_code_note_div_cycle_code(box_change, [took, name_first, put], names);
  app_code_lesson_cups_row_holding(
    box_change,
    [
      [word_last, name_first],
      [word_first, name_copy],
    ],
    names,
  );
  let still = list_join_empty([
    " still has ",
    word_first,
    " in it - nobody touched cup ",
  ]);
  app_code_note_div_cycle_code(
    box_change,
    ["Cup ", name_copy, still, name_copy],
    names,
  );
  let box_code = app_code_container_light_blue(root);
  let quoted_first = app_code_string_code(word_first);
  let held = js_code_let_statement(name_first, quoted_first);
  let copied = js_code_let_statement(name_copy, name_first);
  let quoted_last = app_code_string_code(word_last);
  let changed = js_code_assign_statement(name_first, quoted_last);
  let logged = js_code_console_log_statement(name_copy);
  ("THE STORY IS SAID AGAIN INSIDE THE PROGRAM, AS THE PROGRAM'S OWN NOTES, RATHER THAN IN SENTENCES BETWEEN CHIPS. What was three chips with plain writing between them is one chip, because every one of those sentences is a thing a programmer writes down next to the line it is about, and writing them as notes puts each one on the line it describes instead of above a fragment of the program. The copying lesson before this one is already read that way, so a learner arriving here meets a shape they have just been taught rather than a second one.");
  ("The names in those notes are marked and coloured, and the same two names are coloured everywhere above. That is the join this screen was missing: a cup drawn in the picture, the word for it in the story, and the name in the program are now one thing to look at rather than three that happen to be spelled alike.");
  let first_named = app_code_note_name_mark(name_first);
  let copy_named = app_code_note_name_mark(name_copy);
  ("ORDER OF FIRST MARKING. The cup that changes is marked in the first note and the cup that keeps its word in the second, which is the order the list above lends the colours in. The code box reads its own order off these notes, so the two agree only while this stays first.");
  let words_held = list_join_empty([
    "We fill cup ",
    first_named,
    " with ",
    word_first,
  ]);
  let note_held = js_code_comment_line(words_held);
  let words_copied = list_join_empty([
    "We fill cup ",
    copy_named,
    " from cup ",
    first_named,
  ]);
  let note_copied = js_code_comment_line(words_copied);
  let words_changed = list_join_empty([
    "We put ",
    word_last,
    " in cup ",
    first_named,
  ]);
  let note_changed = js_code_comment_line(words_changed);
  let words_kept = list_join_empty([
    "This changes cup ",
    first_named,
    " only, and not cup ",
    copy_named,
  ]);
  let note_kept = js_code_comment_line(words_kept);
  let words_logged = list_join_empty([
    "We write out what is inside cup ",
    copy_named,
  ]);
  let note_logged = js_code_comment_line(words_logged);
  ("A blank line stands before each note, so the notes break the program into the three moments the story told it in - filling, changing, writing out. Run together, twelve lines of alternating note and code read as one wall.");
  let blank = text_empty();
  html_div_cycle_code(box_code, ["In JS we write the same thing like this:"]);
  ("A BOX THAT SHOWS WHAT A PROGRAM WRITES OUT SHOWS THE WHOLE PROGRAM. The filling, the copying and the changing stand here because the word written out underneath is a claim, and a claim about what a program writes out is only checkable against a program that runs on its own. Shown as the log line alone, the answer rested on lines a learner had to carry down the box - and this screen turns entirely on their order, since the word that comes out is the one the middle line copied and not the one the last line put in.");
  let lines = [
    note_held,
    held,
    blank,
    note_copied,
    copied,
    blank,
    note_changed,
    note_kept,
    changed,
    blank,
    note_logged,
    logged,
  ];
  app_code_code_lines_writes_out(box_code, lines, word_first);
  app_code_note_div_cycle_code(
    box_code,
    [
      "Cup ",
      name_copy,
      " was filled once, and that line changed cup ",
      name_first,
      " only",
    ],
    names,
  );
}
