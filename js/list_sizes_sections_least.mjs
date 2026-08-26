import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
export function list_sizes_sections_least(sizes, limit) {
  "$plain sizes";
  "$plain limit";
  "The fewest runs a list of lengths can be cut into so that no run adds up past a ceiling, the pieces staying in the order they came in.";
  "Filling each run until the next piece would go over is not a guess that happens to do well - it is the best there is for this question. A run that stops short of the ceiling can only push work into the runs behind it, so no other way of cutting an ordered list uses fewer runs. That is worth stating because the balanced cutting built on top of this trusts the number: it asks for exactly this many runs and would be asking for the impossible if a smaller number existed.";
  "A piece longer than the ceiling on its own is not answered for here. It would silently be given a run to itself that still overflows, so the caller checks for one before asking.";
  arguments_assert(arguments, 2);
  let sections = 1;
  let held = 0;
  for (let size of sizes) {
    let with_this = add(held, size);
    let over = greater_than(with_this, limit);
    if (over) {
      sections = add(sections, 1);
      held = size;
      continue;
    }
    held = with_this;
  }
  return sections;
}
