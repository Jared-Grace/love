import { app_code_expression_replace_say } from "./app_code_expression_replace_say.mjs";
import { app_shared_button_green_ordinary } from "./app_shared_button_green_ordinary.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_expression_replace_ask(
  note,
  solved_code,
  value_text,
  retire,
  press,
) {
  arguments_assert(arguments, 5);
  ("say what the operator the learner just chose comes to, and then offer the swap as a button, so the replacement is something they do rather than something that happens to them");
  ("the rule the walkthrough opened with is retired here, at the first press: the learner has just done the thing it asked for, and a sentence still telling them to do it reads as another turn to take rather than as the one they have taken");
  ("the line above has already said WHAT is being swapped for what and WHY it comes to that, so the button is left with the one thing still to be decided - when to let it happen");
  ("Short on purpose. A button repeating the pieces the sentence above it just named would be the same sentence twice, and the learner would read it twice to find out it says nothing new.");
  html_clear(note);
  retire();
  app_code_expression_replace_say(note, solved_code, value_text);
  let asked = "Click here to replace";
  let holder = html_div(note);
  app_shared_button_green_ordinary(holder, asked, press);
}
