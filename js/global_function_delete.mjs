import { property_delete } from "./property_delete.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_delete(fn) {
  "forget what a function has remembered globally, so the next call to it starts over from its own initial value";
  "it arrived on 2026-07-11 with a console.log and a process.exit ahead of the work, left over from somebody looking at it, and nothing has called it since - so the two lines never stopped anything, they only lay in wait for whoever reached for a reset first. removed rather than kept behind a flag: a function that kills the process before doing what its name says is a trap, not a feature";
  let global = global_get();
  property_delete(global, fn.name);
}
