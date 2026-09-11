import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lessons_above_broken } from "./app_code_lessons_above_broken.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lessons_above_broken_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: fail if any lesson's telling - the part drawn above the examples - stops rather than draws. Throws so the dispatcher seam exits nonzero.");
  ("It ratchets against none rather than against a written-down list, because there is no honest number of lessons that may refuse to open. A learner who reaches one of these sees the screen stop, and the lesson after it is as far away as the lesson itself.");
  ("How many lessons it drew comes back beside how many stopped, because none stopped is the answer on a clean run and also the answer on a run that drew nothing at all. The two are told apart by the first number and by nothing else.");
  ("Why this was built: on 2026-09-11 the telling stopped being something a learner had to press for and became something every learner sees. Six of them had been asking to be drawn with fewer pieces than they are handed, and had been wrong for as long as they had existed - the button in front of them was the only reason nobody had found out. Taking a gate off a whole area turns every fault behind it live at once, and this is the check that would have said so first.");
  let fns = app_code_lessons_fns();
  let lessons = fns.length;
  let broken = app_code_lessons_above_broken();
  for (let line of broken) {
    console.log("TELLING WILL NOT DRAW  " + line);
  }
  console.log("\nlessons " + lessons + "   broken " + broken.length);
  let any = greater_than(broken.length, 0);
  if (any) {
    let message = text_combine_multiple([
      "lesson telling gate: ",
      broken.length,
      " of ",
      lessons,
      " lessons draw nothing above their examples and stop instead",
    ]);
    throw new Error(message);
  }
  let result = {
    lessons,
    broken: 0,
  };
  return result;
}
