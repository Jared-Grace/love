import { arguments_assert } from "./arguments_assert.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_parse } from "./js_parse.mjs";
export function app_code_lesson_decoy_code_names(question, answer) {
  arguments_assert(arguments, 2);
  (
    "the tempting wrong answer for a program whose name is a word: the name itself, offered as if handing it to console.log wrote the name out rather than what the name holds"
  );
  (
    "This is the one mistake a screen naming a value after a word exists to catch, so it has to be on the buttons every time. Left to the machinery it was there about half the time: the wrong answers come from fresh batches, each a new shuffle of four words out of eight, and this program's name is one particular word among them."
  );
  (
    "Only the names the program declares for itself, so console and log are not offered - neither is a word a learner could think came out."
  );
  (
    "The answer is not looked at. What makes this decoy is a property of the program alone, and where the name and the value are the same word it would be the right answer instead - which the batches that use this refuse to build."
  );
  let ast = js_parse(question);
  let names = js_declared_names(ast);
  return names;
}
