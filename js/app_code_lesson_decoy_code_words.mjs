import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_strings } from "./js_strings.mjs";
export function app_code_lesson_decoy_code_words(question, answer) {
  arguments_assert(arguments, 2);
  (
    "the tempting wrong answers for a program that holds more than one word: every word written in the program, each offered as if it were the one that came out"
  );
  (
    "A lesson about names puts a second word on the screen on purpose - the one a name used to hold, or the one the other name holds, or the one that was put in after the copying. That word is the whole question, and the screen only asks anything if it is on the buttons. Left to the machinery it is not: the wrong answers are drawn from batches of their own, each a fresh shuffle of four words out of nine, so the word this program left behind was offered about half the time and the other half the question could be got right by reading the one word the buttons and the code had in common."
  );
  (
    "The answer's own word is in this list too, and is dropped where every wrong answer is dropped - a decoy already standing among the ones seen is not added twice, and the right answer is the first thing seen. So nothing has to be taken out here, and this stays a plain reading of the program rather than a comparison against the answer."
  );
  (
    "The answer is not looked at. What makes these decoys is a property of the program alone."
  );
  let ast = js_parse(question);
  let words = js_strings(ast);
  return words;
}
