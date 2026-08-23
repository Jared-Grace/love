import { app_code_lessons_order_ahead_baseline_path } from "./app_code_lessons_order_ahead_baseline_path.mjs";
import { app_code_lessons_order_ahead_walked } from "./app_code_lessons_order_ahead_walked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
export async function app_code_lessons_order_ahead_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no lesson is added ahead of its own difficulty.");
  ("A learner meets the course in one order and carries what they were last given into what comes next, so a lesson whose hardest line holds more operators than a lesson taught after it has put the steep part of the curve in the wrong place. The learner who prompted this had trouble holding three operators at once, and the three-operator lessons were sitting among the two-operator ones.");
  ("Measured against what the course already carried rather than against zero. Ninety-eight of a hundred and twenty-six lessons carrying code stand out of place today, and each of those is a judgement about where that lesson belongs - so the rule binds what is written from now on instead of waiting on ninety-eight decisions. The list only shrinks: a lesson it does not hold fails, and a lesson it holds that is now in its place fails too, because an entry left behind after a reorder quietly lets the same lesson back in.");
  ("Appending a simple lesson to the end of the course puts every harder lesson before it out of place, so a batch of new names can arrive from one addition. That is not the gate misfiring - it is the gate saying the new lesson was added after work that is harder than it, which is the one thing it is here to say.");
  ("The number handed back is how many lessons carrying code were opened, not how many were wrong. A run that reached no lesson at all would find nothing out of place, which is exactly what a course in perfect order looks like, so what was walked travels out beside the verdict.");
  let told = app_code_lessons_order_ahead_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = app_code_lessons_order_ahead_baseline_path();
  let name_write = fn_name("app_code_lessons_order_ahead_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these lessons are taught before lessons simpler than they are - move the lesson later in the course, or move the simpler lessons ahead of it",
    name_write,
  );
  return r;
}
