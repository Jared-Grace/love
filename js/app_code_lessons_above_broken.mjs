import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_element_fake } from "./html_element_fake.mjs";
import { app_code_above_draw } from "./app_code_above_draw.mjs";
import { catch_error_text_or_null } from "./catch_error_text_or_null.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { html_document_fake_lambda } from "./html_document_fake_lambda.mjs";
export function app_code_lessons_above_broken() {
  arguments_assert(arguments, 0);
  ("Every lesson whose telling - the part drawn above the examples - stops rather than draws, said as one line each: which lesson it was and what stopped it. An empty answer means all of them drew.");
  ("It draws them rather than reading them. A telling is handed to a lesson in two ways, by name in the lesson's own description and by position to a shared painter several lessons share, and a search over the words in the files can only ever see the first of those. Measured on 2026-09-11: searching found four broken tellings, drawing found six. The two invisible ones were the two handed over by position.");
  ("What it catches is anything at all that stops a drawing: a painter asked for with more or fewer pieces than it takes, a name it reads that nothing gives it, a piece of the page it asks for that is not there. All of those look identical from here - the screen does not appear - and all of them reached a learner's phone as a page that simply refused to go on.");
  ("It draws through the very same step the app draws through, so a lesson with nothing to say is passed over here exactly as it is passed over there, and a fault in that step is a fault this finds.");
  ("The telling is handed an empty set of surroundings, because the app's own surroundings are a live screen with a learner's place in it and there is none of that here. A telling is given them only to hand them on, so nothing should read them - and a telling that does read them will be named here, which is the right answer rather than a false one.");
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
        app_code_above_draw(root, above, {});
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
  html_document_fake_lambda(all_draw);
  return broken;
}
