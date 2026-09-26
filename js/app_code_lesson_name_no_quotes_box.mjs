import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { js_string_quote } from "./js_string_quote.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_span_code_dark_names } from "./app_code_span_code_dark_names.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_span_text_highlight } from "./app_code_span_text_highlight.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
import { app_code_lesson_name_quoted_letter_line } from "./app_code_lesson_name_quoted_letter_line.mjs";
export function app_code_lesson_name_no_quotes_box(
  root,
  name_source,
  name_copy,
  word_source,
  names,
) {
  arguments_assert(arguments, 5);
  ("the box that says what the quote marks are doing on the line that fills one cup from another: with them the line puts a letter in the cup, without them it puts in what the cup of that name is holding");
  ("The whole lesson turns on one pair of characters, and a learner who has only ever seen quote marks as decoration round a word will read the line without them as the same line. So the line is shown both ways, one under the other, and what each one does is said in the same breath.");
  ("The wrong one is shown last rather than first. Shown first it is the shape a learner carries down the screen, and every question after it is read through the mistake; shown last it is met as something already ruled out.");
  ("The word inside wears the coloured tile, as it does on the screen about which name comes out, because it is the same distinction said again - what is being talked about is the thing in the cup and not the writing on the cup.");
  ("What is actually in the cup is named at the end of the second line rather than left to be remembered. Everything else on the line is said in names - the cup called this gets what is inside the cup called that - and a learner can follow all of it without once holding in mind what that cup has in it, which is the one thing the line is about.");
  ("The mark itself is shown on the line that says it is missing. A reader who has met quote marks only as something a word is written between has no picture to go with the phrase, and the one being talked about here is absent from the line being pointed at - so the words alone leave them looking for a thing that is not there. Shown the character, they know what they are failing to find. It is the same mark, shown the same way, on the last line of the box where the line does have it, so the two lines differ in what they say and not in how they say it.");
  ("Every cup name here wears the colour it wears in the program above, so the a in the sentence is seen to be the a in the code without being matched up by eye.");
  ("THE HIGHLIGHTED WORD INSIDE IS PAIRED WITH WHAT IS INSIDE, which is the word the cup holds, and the pairing is what the highlight is for: a highlighted word and a highlighted piece of code say that they are about each other. For a while inside was highlighted here with nothing else wearing its colour, so the tile pointed at nothing. The name of the cup is not the partner - it already wears its cup colour, and the line is about the thing in the cup rather than the writing on it. So the partner is the value, and only the first time it is said, where inside is.");
  let box = app_code_container_light_blue(root);
  let quote = js_string_quote();
  let quoted_word = app_code_string_code(word_source);
  let highlight = app_code_highlight_color();
  let line_plain = js_code_let_statement(name_copy, name_source);
  ("The box opens by naming the line the learner may have expected to see, so the first line below is read as a correction of it rather than as a new fact. Asked for by the human in these words.");
  let quoted_name = app_code_string_code(name_source);
  let line_quoted = js_code_let_statement(name_copy, quoted_name);
  let line_says = html_div(box);
  html_span_text(line_says, "The code says: ");
  app_code_span_code_dark_names(line_says, line_plain, names);
  let line_not = html_div(box);
  html_span_text(line_not, "The code does not say: ");
  app_code_span_code_dark_names(line_not, line_quoted, names);
  let line_one = html_div(box);
  html_span_text(line_one, "The name ");
  app_code_span_code_dark_names(line_one, name_source, names);
  html_span_text(line_one, " in ");
  app_code_span_code_dark_names(line_one, line_plain, names);
  html_span_text(line_one, " has no quote marks ");
  html_span_text_code_dark(line_one, quote);
  html_span_text(line_one, " around it");
  let line_two = html_div(box);
  html_span_text(line_two, "So the cup called ");
  app_code_span_code_dark_names(line_two, name_copy, names);
  html_span_text(line_two, " gets what is ");
  app_code_span_text_highlight(line_two, "inside");
  html_span_text(line_two, " the cup called ");
  app_code_span_code_dark_names(line_two, name_source, names);
  html_span_text(line_two, " (");
  html_span_text_code_background(line_two, quoted_word, highlight);
  html_span_text(line_two, " are inside ");
  app_code_span_code_dark_names(line_two, name_source, names);
  html_span_text(line_two, ")");
  app_code_lesson_name_quoted_letter_line(box, name_source, name_copy, names);
  return box;
}
