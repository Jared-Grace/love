import { arguments_assert } from "./arguments_assert.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { not } from "./not.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { js_statement_block_or_null } from "./js_statement_block_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
export function js_statement_blocks(node) {
  "Every block one statement holds directly under itself, each as a list of its statements, in the order the properties holding them are named here. A branch written without braces counts as a block of one statement.";
  "A FUNCTION IS NOT ON THE LIST, AND THAT IS THE POINT OF THE LIST. A function declaration holds its body under the same property name a loop does, so anything reading by property name alone would walk into one and call the edit inside it an edit to a block. Two functions standing at the same place under different names are one function taken out and another put in, and the reading that says so is the one beside this - naming a function a block would take that answer away from it.";
  "THE BLOCKS COME BACK IN A FIXED ORDER, so the same branch of the same statement is at the same index on both sides of a comparison. Read out of the properties as they happen to be written, an if whose else was authored before its then would line its two branches up against the wrong two.";
  "WHAT IS HELD IS NOT READ ANY DEEPER. A block inside a block is found by asking this again about the statement holding it, which is what lets an edit be named at whatever depth it actually happened.";
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
  let blocks = [];
  for (let name of names) {
    let held = property_or_null(node, name);
    let block = js_statement_block_or_null(held);
    let there = null_not_is(block);
    if (there) {
      list_add(blocks, block);
    }
  }
  return blocks;
}
