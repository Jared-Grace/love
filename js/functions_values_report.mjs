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
  let names = text_split_comma(names_comma);
  let lines = [];
  for (let name of names) {
    let fn = await function_import_unalias(name);
    let wants = fn.length;
    let takes_something = greater_than(wants, 0);
    if (takes_something) {
      let line = {
        name,
        value: "SKIPPED - takes " + wants + " arguments",
      };
      list_add(lines, line);
      console.log(name + "  SKIPPED - takes " + wants + " arguments");
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
