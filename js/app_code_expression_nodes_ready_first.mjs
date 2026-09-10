import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { list_take } from "./list_take.mjs";
export function app_code_expression_nodes_ready_first(item) {
  arguments_assert(arguments, 1);
  ("the one operator in an expression that JavaScript works out next: of the operators standing ready, the leftmost one");
  ("★ THIS IS WHAT THE MACHINE DOES, AND THE READY LIST ALONE IS NOT. An expression often has more than one operator with a value on each side of it - 2 * 3 + 4 * 5 has two - and for a line of plain numbers either of them may be worked out with the line landing on the same value. That is a fact about arithmetic and not about the computer. JavaScript settles the order completely: it works out the left side of an operator all the way down, then the right side all the way down, and only then applies the operator itself. So on 2 * 3 + 4 * 5 the left times always goes first, and i++ * 2 + i++ * 3 comes to 8 rather than 7, which is how the order can be seen from outside.");
  ("WHY THE LEFTMOST READY ONE IS EXACTLY THAT ORDER. Working the left side all the way down before the right is a walk that reaches a node only once both of its sides are finished, and reaches the left branch before the right one. The first node such a walk can finish is therefore the deepest leftmost operator whose two sides are already values - which is the first entry of the ready list, because that list is built by joining what the left side offers to what the right side offers, in that order.");
  ("SO THE COURSE TEACHES ONE ANSWER PER STEP. A lesson that offered a choice would be teaching a rule that holds only while every part of a line is a plain number, and would have to be taken back the moment a line holds something that counts, prints or fetches. One answer per step is the rule that goes on being true.");
  let ready = app_code_expression_nodes_ready(item);
  let count = 1;
  let first = list_take(ready, count);
  return first;
}
