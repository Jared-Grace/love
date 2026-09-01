import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { js_variable_box } from "./js_variable_box.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_variable_box(f_name, name) {
  arguments_assert(arguments, 2);
  ("$plain name");
  ("the word one of this function's own locals is written under. Every mention of it inside the function is rewritten; nothing outside the function is touched, because a local has no mentions outside it.");
  ("Keep one of a function's locals in a one-entry record instead of in a plain local, so that a run of lines cut out of the function afterwards still reads and writes the same place rather than a copy of it.");
  ("THIS IS THE MOVE THAT MAKES A CUT SAFE, AND ON ITS OWN IT CHANGES NOTHING. A local held by a function and read inside the functions nested in it is one place, so a nested function sees every write the moment it happens. Cut that nested function out into a file of its own and it can only be handed the value and only hand a value back, and the copy is right only at the instant it crosses - which is how a lift left the replacing game unplayable for nine days. A record is one place again: everything given the record reads and writes it at the moment it actually runs, which is what the local did.");
  ("IT IS THE SAME CODE BY REASONING RATHER THAN BY TRYING IT. A plain local and a one-entry record differ in how they are spelled and in nothing else - both are one place, both are made at the same point in the run, both live as long as anything can still reach them.");
  ("A MENTION THAT WERE MISSED WOULD FAIL LOUDLY RATHER THAN QUIETLY, which is the second half of why this is safe to run unasked. The local is renamed rather than left beside the record, so anything still asking for the old word is asking for a word nothing binds - the gate that reads for those names it, and the page throws on the line rather than drawing something subtly wrong.");
  ("It canonicalizes afterwards because the lines it writes call two functions the file may never have imported, and a file recorded in a commit without them does not load.");
  let held = add(name, "_held");
  function lambda(ast) {
    js_variable_box(ast, f_name, name, held);
  }
  await function_transform(f_name, lambda);
  let r = await function_auto(f_name);
  return r;
}
