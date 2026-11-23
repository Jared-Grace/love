import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_learn_js_program_step_call_words() {
  arguments_assert(arguments, 0);
  ("what each function a line can call is called on its button in the step-through, asked once Call a function is chosen, keyed by the kind the trace gives the call, in the order the buttons stand. 2026-11-13, at the human's asking, when pop came as the second array function: the choices would keep growing with each function, so Call a function is one choice and which function is a second question. One list for the step-through and for Show me the answer, so a function added to one cannot be missing from the other");
  ("2026-11-13, at the human's asking: each button says what its function does, not its name, so choosing one tests knowing what the line does rather than matching the name written in it. Not picked: the names push and pop, which the line itself spells out");
  ("2026-11-15: keyed by the function called, so a.unshift(x) and a.shift() are asked about as themselves, at the front, where they had been asked about as push and pop, at the end. Every lesson stepping a call shows all four buttons. Not picked: only the functions taught so far, which would make the buttons depend on the lesson");
  ("2026-11-22: splice added, since a splice step looked its words up here and found none, so choosing what it does threw; and reverse, at the human's asking, for the reverse lesson");
  ("2026-11-23, at the human's asking: toUpperCase, the first string function, and toLowerCase beside it so the string list is a choice. Which kind of value each is called on is asked first, by ",
    fn_name("app_learn_js_program_step_call_types"),
    ", so only that kind's buttons show");
  let r = {
    push: "Add an item to the end of an array",
    pop: "Remove the last item from the end of an array",
    unshift: "Add an item to the front of an array",
    shift: "Remove the first item from the front of an array",
    splice: "Take out or put in an item at an index of an array",
    reverse: "Turn an array around, its last item first",
    toUpperCase: "Give back the string with every letter a capital",
    toLowerCase: "Give back the string with every letter small",
  };
  return r;
}
