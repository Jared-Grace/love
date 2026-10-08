import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_above_vague_pattern } from "./app_code_above_vague_pattern.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lesson_above_fake_draw } from "./app_code_lesson_above_fake_draw.mjs";
import { html_element_fake_lines } from "./html_element_fake_lines.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { app_code_lessons_fake_page_lambda } from "./app_code_lessons_fake_page_lambda.mjs";
export function app_code_lessons_above_vague() {
  arguments_assert(arguments, 0);
  ("Every piece of a lesson's telling that points at code with a word instead of showing the code, as lesson name | the piece. Read off the drawn screen, not the files, so prose a function says about itself is never counted and a piece handed to a shared painter is.");
  ("Also says how many lessons were drawn, because nothing found is the answer on a clean run and on a run that drew nothing.");
  let pattern = app_code_above_vague_pattern();
  let fns = app_code_lessons_fns();
  let offenders = [];
  function all_read() {
    function one_read(fn) {
      let element = app_code_lesson_above_fake_draw(fn);
      let texts = html_element_fake_lines(element);
      function one_test(t) {
        let vague = pattern.test(t);
        if (vague) {
          let line = text_combine_multiple([fn.name, " | ", t]);
          list_add(offenders, line);
        }
      }
      each(texts, one_test);
    }
    each(fns, one_read);
  }
  app_code_lessons_fake_page_lambda(all_read);
  let r = {
    walked: fns.length,
    offenders,
  };
  return r;
}
