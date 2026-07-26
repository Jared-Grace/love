import { less_than } from "./less_than.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_combine } from "./text_combine.mjs";
import { dispatcher_scripts } from "./dispatcher_scripts.mjs";
export function dispatcher_run_name(line) {
  "the dispatcher function name a line of text runs, or empty text when the line runs no dispatcher function";
  "a rule reads Bash(node scripts/r.mjs <name> ...) and the command it approves reads node scripts/r.mjs <name> ... — the same shape, so the same reading answers for both. the name ends at the first space, colon or closing paren.";
  "one reader for the rule and for the command is what lets the standing grants and the commands that actually prompted be compared at all: they are the supply and the demand of the same thing, and a separate reader for each would let them drift into disagreeing about what a name is";
  for (let script of dispatcher_scripts()) {
    let opening = text_combine(script, " ");
    let at = line.indexOf(opening);
    if (less_than(at, 0)) {
      continue;
    }
    let rest = line.slice(at + opening.length);
    let name = rest.split(/[ :)]/)[0];
    return name;
  }
  let v = text_empty();
  return v;
}
