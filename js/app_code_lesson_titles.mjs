import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { property_get } from "./property_get.mjs";
import { html_component_offscreen } from "./html_component_offscreen.mjs";
import { html_component_text_runs } from "./html_component_text_runs.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_titles() {
  arguments_assert(arguments, 0);
  ("every lesson's home title, drawn off-screen and read back: the lesson's own name, the whole title as one piece of writing, and the runs it was made of with the code ones marked");
  ("Drawn rather than gathered from the makers that write it. A title is assembled out of several pieces by several different makers - some shared between lessons, some spelling their words into a variable and some painting them straight onto the row - and anything that read those makers would be checking a guess about how they add up. What is drawn is what the learner reads.");
  ("The number a lesson is known by is its place in this list and is not carried here, because it moves every time a lesson is put in ahead of it. A caller that wants numbers counts.");
  let fns = app_code_lessons_fns();
  function title_read(lesson_fn) {
    let lesson = lesson_fn();
    let name_render = property_get(lesson, "name");
    let box = html_component_offscreen();
    name_render(box);
    let runs = html_component_text_runs(box);
    function text_of(run) {
      let text = property_get(run, "text");
      return text;
    }
    let texts = list_map(runs, text_of);
    let title = list_join_empty(texts);
    let read = {
      fn: lesson_fn.name,
      title,
      runs,
    };
    return read;
  }
  let titles = list_map(fns, title_read);
  return titles;
}
