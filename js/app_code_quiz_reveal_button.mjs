import { emoji_light_bulb } from "./emoji_light_bulb.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
export function app_code_quiz_reveal_button(parent, on_reveal) {
  "the button a stuck learner presses to be shown the answer: a light bulb and the words that go with it, across the width of its column";
  "Every screen that lets a learner ask for the answer asks for it the same way, so the button is made in one place. Two screens spelling their own would be two labels to keep in step, and a learner who learned the words on one screen would be reading them again on the other.";
  let left = emoji_light_bulb();
  let right = " Show me the answer";
  let button = app_shared_button_wide_text_combine(
    parent,
    left,
    right,
    on_reveal,
  );
  return button;
}
