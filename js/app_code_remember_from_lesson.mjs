import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_lesson_index_by_id } from "./app_code_lesson_index_by_id.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_shared_button_inline_sentence } from "./app_shared_button_inline_sentence.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_remember_from_lesson(
  parent,
  context,
  lesson_fn,
  parts,
) {
  arguments_assert(arguments, 4);
  ("a reminder of something an earlier lesson taught, opening with which lesson that was: Remember, from lesson N, and then the parts, which alternate plain writing and code the same way every other line on a lesson screen does");
  ("The number is asked of the lesson order rather than written into the sentence, so a lesson moved or put in ahead of the one pointed at changes every reminder with it, and no reminder can go on naming a lesson that is now somewhere else.");
  ("The number is itself the button, so a learner who does not remember can go and look without hunting through the list for it.");
  let fns = app_code_lessons_fns();
  let index = list_index_of(fns, lesson_fn);
  let number_whole = add_1(index);
  let ids = app_code_lesson_ids_short();
  let lesson_id = property_get(ids, lesson_fn.name);
  async function on_click() {
    await app_shared_screen_go_tab(
      context,
      "lesson_id",
      lesson_id,
      app_code_examples,
    );
  }
  ("THE LESSON JUST BEFORE THIS ONE IS NAMED BY THE RELATION AND NOT BY ITS NUMBER. A number is an address, and an address is what a learner needs for a lesson they finished a week ago - they must be able to find it on the list. For the lesson they were reading a minute ago the address is the one thing they do not need, and reading it as a number makes them subtract to find out that the reminder is about the screen they just left. So the near one says the previous lesson and every other one says its number, and the two shapes standing on one screen are themselves the reading: this one is behind you, that one is far back.");
  ("Which of the two it is, is worked out from where the lessons stand rather than written at the call. A reminder that said the previous lesson in typed words would go on saying it after a lesson was put in between the two, and would then be plainly false.");
  ("It is asked of the run this reader was handed rather than of every lesson that exists, because previous means the lesson they actually came from. On a page where some lessons are held back, the one before them is the one before them on their list.");
  let current_id = app_code_lesson_current_id(context);
  let index_current = app_code_lesson_index_by_id(current_id);
  let index_shown = app_code_lesson_index_by_id(lesson_id);
  ("The first lesson of the run is excluded rather than compared. A lesson the reader was not handed is not on their list at all and answers minus one, which sits one before the first - so on the first screen alone the two would agree and a reminder pointing somewhere else would call itself the previous lesson.");
  ("★ THE NUMBER IS COUNTED OFF THE READER'S OWN LIST, WHICH IS THE ONLY LIST THEY CAN LOOK THE LESSON UP ON. Counted off every lesson that exists it named a lesson the reader has no way to reach: measured 2026-09-18, a hundred and twenty five of a hundred and fifty nine lessons were handed to a reader, and from the fortieth of them onward the home list and every reminder gave one lesson two different numbers. A number that does not match the list underneath it is worse than no number, because a learner who goes looking finds the wrong lesson and has no way of knowing it.");
  ("The whole-list number is kept for the one case the reader's list cannot answer: a reminder pointing at a lesson held back from them, which is not on their list and so has no number on it. That points at nothing they can reach either way, and the gate over the reading order is where that is caught; here it is only a number that does not pretend to be theirs.");
  let shown_is = greater_than(index_shown, -1);
  let number = number_whole;
  if (shown_is) {
    number = add_1(index_shown);
  }
  let after_first_is = greater_than(index_current, 0);
  let left = add_1(index_shown);
  let follows_is = equal(left, index_current);
  let previous_is = after_first_is && follows_is;
  let opening_words = "Remember, from lesson ";
  let label = number;
  if (previous_is) {
    opening_words = "Remember, from ";
    label = "the previous lesson";
  }
  let div = html_div(parent);
  html_span_text_content(div, opening_words);
  app_shared_button_inline_sentence(div, label, on_click);
  let first = list_first(parts);
  let rest = list_skip(parts, 1);
  let opening = text_combine_multiple([", ", first]);
  html_cycle_code(div, [opening, ...rest]);
  return div;
}
