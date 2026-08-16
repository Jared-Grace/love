import { arguments_assert } from "./arguments_assert.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_transition_color_set } from "./html_transition_color_set.mjs";
export function app_code_expression_colored_over(component, duration) {
  arguments_assert(arguments, 2);
  ("say that whatever this piece is coloured next, it takes on that colour over the given while rather than wearing it from one frame to the next");
  ("Said before the colour is given, and the page is made to take it in before the colour follows. A page told both in the same breath has only ever seen the finished answer and shows it at once, which is the very jump this is here to remove.");
  ("The while is asked for rather than fixed here, because the two colourings on this screen are not the same kind of thing: the blue coming UP is the news of what was chosen, and the blue going is only the news having been read.");
  html_transition_color_set(component, duration);
  html_reflow_force(component);
}
