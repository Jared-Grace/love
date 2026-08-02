import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { property_get } from "./property_get.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_condition_bodies_empty(ast) {
  arguments_assert(arguments, 1);
  ("Every place in one file where a question is asked and the answer opens a block");
  ("with nothing in it.");
  ("A condition standing in front of an empty block is never a small thing left");
  ("untidy. Somebody worked out an answer and then wrote nowhere for it to go, so");
  ("the guard that reads as being there is not there, and the reader who finds the");
  ("code later sees a check being made.");
  ("The one that found this asked whether a name matched the name being searched");
  ("for, and did nothing either way, in a selector - so a request for one list by");
  ("name handed back every list in the file, and whatever transform received them");
  ("rewrote all of them.");
  ("Only the two halves of a question count. A loop with an empty body is a");
  ("different thing on purpose: the work is written into its header, and the repo");
  ("has one that walks two paths forward while they agree and answers with how far");
  ("it got. Nothing there was left unwritten.");
  let empties = [];
  function block_empty_is(node) {
    if (equal(node, null)) {
      return false;
    }
    let type = js_node_type(node);
    let block_is = equal(type, "BlockStatement");
    if (not(block_is)) {
      return false;
    }
    let none = property_list_empty_is(node, "body");
    return none;
  }
  for (let node of js_list_type_nodes(ast, "IfStatement")) {
    let consequent = property_get(node, "consequent");
    if (block_empty_is(consequent)) {
      list_add(empties, "if");
    }
    let alternate = property_get(node, "alternate");
    if (block_empty_is(alternate)) {
      list_add(empties, "else");
    }
  }
  return empties;
}
