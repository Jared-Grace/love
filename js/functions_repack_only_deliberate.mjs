import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function functions_repack_only_deliberate() {
  "The functions that take a record apart and put it back together on purpose, and are therefore not named by the sweep that looks for that shape.";
  "What makes one of these different is not how it is written - it is written exactly like an offender, and no reading of the tree could tell them apart. It is a claim about what the function is for, and only a person can make that claim. So the way out is a name written down here beside the reason, rather than a shape the sweep could learn.";
  "The first reason, and it is the reason a repack is ever worth its lines: the record that comes out must be a fresh one. Handing back the record that came in shares it, so whoever receives it can write into the caller's own copy - and where a value is remembered or given away, that is a bug waiting rather than a saving. A function written to break that sharing does exactly what this sweep is looking for and is right to. The first name below stands on this one.";
  "The second reason is the opposite shape to the first: the record that comes out must be a SMALLER one. What that kind of function is for is the field it leaves out, and a sweep can see what came back but never what did not - so a projection and a plain repack read off the tree as the same shape, and telling them apart is again a claim rather than a reading. The second name below is the read-only twin of the gate about one-step bundle growth, and what it leaves out is the sizes. Those are handed to it because whoever writes them back has to write down the exact numbers that were compared against; to somebody only asking what that gate would say they are an invitation to write them somewhere, which is the very re-basing that having a read-only twin at all was meant to avoid. Leaving them out is therefore the whole of its work.";
  "Neither name is spelled out in this prose on purpose. The pass that tidies these files reads a function's name wherever it finds one, including inside a sentence, and turns the sentence into a piece of code around it - so a paragraph naming its subject is quietly taken apart. The names are below, in the order the reasons are given.";
  "Each reason ends differently, and a reader wanting to take a name off this list should say which ending has arrived. The first ends if the caller stops keeping what it was handed - then nothing is being shared and there is nothing to break. The second ends if the left-out field ever becomes something the reader is meant to see - then the function hands back everything it was given and is a repack with no reason left.";
  "Kept as a list of names rather than as a mark in each file, so that the whole of what has been let through can be read in one place. A mark spread over the repo is a list nobody can count.";
  arguments_assert(arguments, 0);
  let f_name = fn_name("g_coordinates_tile");
  let f_name2 = fn_name("bundle_sizes_steps_report");
  let names = [f_name, f_name2];
  return names;
}
