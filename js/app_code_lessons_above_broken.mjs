import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { html_element_fake } from "./html_element_fake.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { app_code } from "./app_code.mjs";
import { app_code_above_draw } from "./app_code_above_draw.mjs";
import { catch_error_text_or_null } from "./catch_error_text_or_null.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { html_document_fake_lambda } from "./html_document_fake_lambda.mjs";
import { storage_session_fake_lambda } from "./storage_session_fake_lambda.mjs";
export function app_code_lessons_above_broken() {
  arguments_assert(arguments, 0);
  ("Every lesson whose telling - the part drawn above the examples - stops rather than draws, said as one line each: which lesson it was and what stopped it. An empty answer means all of them drew.");
  ("It draws them rather than reading them. A telling is handed to a lesson in two ways, by name in the lesson's own description and by position to a shared painter several lessons share, and a search over the words in the files can only ever see the first of those. Measured on 2026-09-11: searching found four broken tellings, drawing found six. The two invisible ones were the two handed over by position.");
  ("What it catches is anything at all that stops a drawing: a painter asked for with more or fewer pieces than it takes, a name it reads that nothing gives it, a piece of the page it asks for that is not there. All of those look identical from here - the screen does not appear - and all of them reached a learner's phone as a page that simply refused to go on.");
  ("It draws through the very same step the app draws through, so a lesson with nothing to say is passed over here exactly as it is passed over there, and a fault in that step is a fault this finds.");
  ("★ THE TELLING IS HANDED THE SURROUNDINGS THE APP HANDS IT, WHICH IS WHICH APP THIS IS. For its first days it was handed an empty set instead, on the reading that a telling is given them only to hand on and so nothing should read them. That reading was wrong, and wrong about half the lessons here: a telling that ends with Remember, from lesson 3 and a button back to it has to know which app to ask where the reader is, and asking is the whole point of the reminder. Measured 2026-09-23, sixty-six of a hundred and fifty-nine lessons were named as broken by this and every one of them drew perfectly well on a phone. A check that fails on working screens is worse than no check, because the sixty-six teach whoever runs it to read past the one line that is real.");
  ("The surroundings are the real app rather than something shaped like it, because everything filed for a reader is filed under the app's own name and a stand-in name would file it somewhere no reader ever looks. There is nothing else in them: a telling that reaches for more than the app it is in is named here, and that is the fault the empty set was reaching for.");
  ("One tab's memory is stood in for as well, because that is where the reader's place is kept and reaching for it where there is no browser stops the drawing on the browser's absence rather than on anything about the lesson.");
  let fns = app_code_lessons_fns();
  let broken = [];
  function all_draw() {
    for (let i = 0; less_than(i, fns.length); i++) {
      let fn = list_get(fns, i);
      let number = i + 1;
      function one_draw() {
        let lesson = fn();
        let above = property_get(lesson, "above");
        let element = html_element_fake();
        let root = html_component_wrap(element);
        let context = {
          app_fn: app_code,
        };
        app_code_above_draw(root, above, context);
      }
      let went_wrong = catch_error_text_or_null(one_draw);
      if (went_wrong) {
        let line = text_combine_multiple([
          number,
          " ",
          fn.name,
          "  ",
          went_wrong,
        ]);
        list_add(broken, line);
      }
    }
  }
  function all_draw_on_page() {
    html_document_fake_lambda(all_draw);
  }
  storage_session_fake_lambda(all_draw_on_page);
  return broken;
}
