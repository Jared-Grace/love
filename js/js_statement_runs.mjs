import { property_in_list } from "./property_in_list.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_run_or_null } from "./js_statement_run_or_null.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
export function js_statement_runs(node) {
  "Every run of statements one statement holds directly under itself, in the order the properties holding them are named here.";
  "A FUNCTION IS NOT ON THE LIST, AND THAT IS THE POINT OF THE LIST. A function declaration holds its body under the same property name a loop does, so anything reading by property name alone would walk into one and call the edit inside it an edit to a block. Two functions standing at the same place under different names are one function taken out and another put in, and the reading that says so is the one beside this - naming this a block would take that answer away from it.";
  "THE RUNS COME BACK IN A FIXED ORDER, so the same branch of the same statement is at the same index on both sides of a comparison. Read out of the properties as they happen to be written, an if whose else was authored before its then would line its two branches up against the wrong two.";
  "WHAT IS HELD IS NOT READ ANY DEEPER. A run inside a run is found by asking this again about the statement holding it, which is what lets an edit be named at whatever depth it actually happened.";
  arguments_assert(arguments, 1);
  let kinds = [
    "IfStatement",
    "ForStatement",
    "ForInStatement",
    "ForOfStatement",
    "WhileStatement",
    "DoWhileStatement",
    "TryStatement",
    "BlockStatement",
    "LabeledStatement",
  ];
  let holding = property_in_list(node, "type", kinds);
  if (not(holding)) {
    let r = [];
    return r;
  }
  let names = [
    "body",
    "consequent",
    "alternate",
    "block",
    "handler",
    "finalizer",
  ];
  let runs = [];
  for (let name of names) {
    let held = property_or_null(node, name);
    let run = js_statement_run_or_null(held);
    let there = null_not_is(run);
    if (there) {
      list_add(runs, run);
    }
  }
  return runs;
}
