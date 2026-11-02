import { arguments_assert } from "./arguments_assert.mjs";
import { function_args_count_assert } from "./function_args_count_assert.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { list_add } from "./list_add.mjs";
export async function function_call_timed_add(timings, fn, args) {
  "$plain timings";
  "$plain fn";
  "$plain args";
  "Runs one call, adds how long it took to the list handed in, and hands back what the call handed back - or lets what it threw carry on, with its time still added.";
  "★ THE TIME IS ADDED EVEN WHEN THE CALL THROWS, AND THAT IS THE REASON THIS IS NOT ITS NEIGHBOUR WHICH TIMES ONE CALL AND RETURNS. A run that dies half an hour into a step is the run somebody most wants explained, and a timing handed back by return is lost with the throw. Each entry says whether its call finished, so a step that took half an hour and failed cannot be read as one that succeeded.";
  "The entry is the name and milliseconds shape the timing readers already take, with the one word added. The name comes from the function rather than from a label typed beside it, so it cannot go stale when the function is renamed.";
  arguments_assert(arguments, 3);
  function_args_count_assert(fn, args);
  let name = fn.name;
  let started = date_now_milliseconds();
  let finished = false;
  try {
    let value = await fn(...args);
    finished = true;
    return value;
  } finally {
    let milliseconds = date_milliseconds_since(started);
    list_add(timings, {
      name,
      milliseconds,
      finished,
    });
  }
}
