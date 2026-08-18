import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function functions_repack_only_deliberate() {
  "The functions that take a record apart and put it back together on purpose, and are therefore not named by the sweep that looks for that shape.";
  "What makes one of these different is not how it is written - it is written exactly like an offender, and no reading of the tree could tell them apart. It is a claim about what the function is for, and only a person can make that claim. So the way out is a name written down here beside the reason, rather than a shape the sweep could learn.";
  "One reason so far, and it is the reason a repack is ever worth its lines: the record that comes out must be a fresh one. Handing back the record that came in shares it, so whoever receives it can write into the caller's own copy - and where a value is remembered or given away, that is a bug waiting rather than a saving. A function written to break that sharing does exactly what this sweep is looking for and is right to.";
  "Kept as a list of names rather than as a mark in each file, so that the whole of what has been let through can be read in one place. A mark spread over the repo is a list nobody can count.";
  arguments_assert(arguments, 0);
  let names = [fn_name("g_coordinates_tile")];
  return names;
}
