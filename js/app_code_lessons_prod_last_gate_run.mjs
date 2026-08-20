import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lessons_prod_last_fn } from "./app_code_lessons_prod_last_fn.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
export function app_code_lessons_prod_last_gate_run() {
  "QA gate: prove the lesson named as the last one the built site shows is really in the lesson list, so a lesson taken off that list fails the build instead of white-screening the code app for every reader of the built site";
  "The cut asks the list where that lesson stands, and asking for a lesson that is not there throws. On a working copy nothing is asked, so the whole of the damage lands on the one copy a learner reads and on nobody who could have noticed it first.";
  let fns = app_code_lessons_fns();
  let last = app_code_lessons_prod_last_fn();
  let f_name = fn_name("app_code_lessons_prod_last_fn");
  list_includes_assert_json(fns, last, {
    hint: text_combine_multiple([
      "the lesson named as the last one shown on the built site is no longer in the lesson list - either put it back, or name a different lesson in ",
      f_name,
    ]),
  });
  ("how many lessons were looked through comes back with the verdict, because green here means the name was found among them and green is also what a list that had gone empty would say - the count is the only thing that tells those apart, and it falls to nothing on the day the reading breaks");
  let lessons = list_size(fns);
  let r = {
    lessons,
  };
  return r;
}
