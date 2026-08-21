import { arguments_assert } from "./arguments_assert.mjs";
import { child_group_kill } from "./child_group_kill.mjs";
import { child_output_wait } from "./child_output_wait.mjs";
export async function child_output_wait_deadline(child, program, words, ms) {
  "$plain child";
  "Reads everything a started program printed, and ends that program if it has not finished within the time allowed.";
  arguments_assert(arguments, 4);
  ("★ THE FAULT IS REPORTED BY THE PATH THAT ALREADY REPORTS FAULTS. Nothing here races the waiting or answers in its place. The program is ended, and the waiting below then sees it close without success and complains in its own words, naming the program and the words it was run with. So a build that ran out of time is reported exactly like a build that broke, which is what it is.");
  ("The timer is cleared whatever happens. A program that finished on time must not be ended a moment later by a timer nobody stopped - and by then the number it was started under may belong to something else entirely, so the one being ended would be a stranger.");
  function lambda() {
    child_group_kill(child);
  }
  let timer = setTimeout(lambda, ms);
  try {
    let out = await child_output_wait(child, program, words);
    return out;
  } finally {
    clearTimeout(timer);
  }
}
