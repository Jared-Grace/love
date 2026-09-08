import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_code_dark_nowrap } from "./html_span_code_dark_nowrap.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
export function app_code_lesson_statement_title_name_id(words, code) {
  arguments_assert(arguments, 2);
  ("a home title for a Statements lesson: what the lesson is about in words, and then the shape of the line it teaches");
  ("Every lesson in this category teaches one line, so every one of them wants its title to show that line - and the four that exist were each spelling out the same six steps to do it. What differs between them is only the words and the line; everything else was the same run of work four times over.");
  ("The line is shown as well as named because the home list is read to find a lesson again rather than to meet it, and by then the line is what is remembered.");
  ("Only what is painted goes through here. The id a learner's finished lessons are stored under is built from the words, so a line may be shown, reworded or taken away without any learner losing their place.");
  ("The line a caller hands in is spelled compactly - a+b rather than a + b - and it is the one place in this course that is. Code a learner reads is spelled the way JavaScript is written everywhere else, so that what they learn here is what they meet outside and what they meet outside is readable here. A title is not read, it is recognised: it sits beside a number on a list of a hundred and twenty, and every space in it is width spent on nothing.");
  ("The line is one colour all the way across, which is what a line handed over as a string can be. A title whose line has a gap painted into it asks for the painting one instead, and this is written on top of that so the two cannot come out looking different.");
  function paint_code(parent) {
    let tile = html_span_code_dark_nowrap(parent);
    html_span_text(tile, code);
  }
  let built = app_code_lesson_statement_title_name_id_paint(words, paint_code);
  return built;
}
