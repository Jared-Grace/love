import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_transition_color_set } from "./html_transition_color_set.mjs";
export function app_code_expression_colored_slowly(component) {
  arguments_assert(arguments, 1);
  ("say that whatever this piece is coloured next, it takes on that colour over the app's one while rather than wearing it from one frame to the next");
  ("Said before the colour is given, and the page is made to take it in before the colour follows. A page told both in the same breath has only ever seen the finished answer and shows it at once, which is the very jump this is here to remove.");
  let duration = app_shared_animation_duration();
  html_transition_color_set(component, duration);
  html_reflow_force(component);
}
