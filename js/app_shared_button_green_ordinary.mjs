import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_button_green_ordinary(div, text, lambda) {
  arguments_assert(arguments, 3);
  ("an ordinary button of the screen, painted green: for a button that stands inside something being read rather than at the foot of the screen");
  ("Built from the button every other button on the screen is built from, so its size, its spacing and its corners are not matched to theirs but ARE theirs, and cannot come apart from them later.");
  ("The green control is the other kind, and is deliberately not what this is. A control is drawn larger than the page because it is the thing the screen is for; a button standing in the middle of an explanation is the next step of that explanation, and drawn larger than the sentences it follows it reads as a heading over them rather than as the thing to press once they have been read.");
  let component = app_shared_button(div, text, lambda);
  app_shared_button_screen_green_style_assign(component);
  return component;
}
