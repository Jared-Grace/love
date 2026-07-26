import { function_callee_seam_assert } from "./function_callee_seam_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_import_unalias } from "./function_import_unalias.mjs";
import { list_add } from "./list_add.mjs";
import { function_run } from "./function_run.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_values_report(names_comma) {
  "Say what each of the named functions answers, one to a line, name first and value after. For looking at a handful of helpers that take nothing and hand back a path or a name, where the question is whether they still say what they are supposed to say.";
  "This exists so that looking at four helpers is one command instead of a loop written in the shell. A loop leaves nothing behind: it cannot be granted, it cannot be named in a commit, and the next person wanting the same answer writes it again from nothing. The loop was the description of this function all along.";
  "Only functions taking nothing are run. A function wanting arguments cannot be fed any from here, and guessing at them would be running something nobody asked for - so it is named and skipped, and the line says so.";
  "Taking nothing is not the same as being safe to run, and believing otherwise nearly cost a real deploy. Asking this for the value of the deploy entry point started one: it takes no arguments, so the arity check waved it straight through, and only the minutes it spends fetching a lock library stopped it short. So every name is put to a fence first - refused, on Claude's seam only, if anything it imports however deep ends at a shell, an eval, or a write to the disk. The human's own terminal is not fenced, because the person typing the name is the person who will see what it does.";
  "Fencing the shell alone was not enough, and the second half was found the honest way: a baseline writer takes no arguments and reaches no shell, so the first fence waved it through and asking for its value would have rewritten the file. That was settled by asking the import graph rather than by running it.";
  let names = text_split_comma(names_comma);
  let lines = [];
  for (let name of names) {
    await function_callee_read_only_assert(name);
    let fn = await function_import_unalias(name);
    let wants = fn.length;
    let takes_something = greater_than(wants, 0);
    if (takes_something) {
      let skipped = "SKIPPED - arguments wanted: " + wants;
      list_add(lines, {
        name,
        value: skipped,
      });
      console.log(name + "  " + skipped);
      continue;
    }
    let value = await function_run(name, []);
    let shown = json_format_to(value);
    list_add(lines, {
      name,
      value,
    });
    console.log(name + "  " + shown);
  }
  return lines;
}
