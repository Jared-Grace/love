import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
export function app_shared_buttons_choice_pair(
  parent,
  text_true,
  text_false,
  chosen,
  fn_set,
) {
  arguments_assert(arguments, 5);
  ("A yes-or-no question asked as two buttons side by side, each naming one answer, with the answer in force coloured - they behave as a radio group: tapping either one settles the question, and tapping the coloured one again changes nothing.");
  ("$plain text_true text_false");
  ("the two texts are the words a reader sees on the buttons. They are shown and nothing that runs.");
  ("BOTH ANSWERS ARE ON SCREEN AT ONCE, asked for by the human, so a reader sees what the other answer is called before choosing it. Rejected: one button that flips and names what it will do, which hid the answer the reader already had and made the same tap mean opposite things on two visits.");
  ("THE CALLER HANDS IN WHAT AN ANSWER DOES, and it is handed the answer as a yes or a no, so the same pair serves every flag a page keeps and none of them is reached for from here.");
  let row = html_div(parent);
  let choices = [
    {
      value: true,
      text: text_true,
    },
    {
      value: false,
      text: text_false,
    },
  ];
  for (let choice of choices) {
    async function choose() {
      await fn_set(choice.value);
    }
    let button = app_shared_button(row, choice.text, choose);
    let chosen2 = equal(choice.value, chosen);
    app_shared_button_toggle_style(chosen2, button);
  }
  return row;
}
