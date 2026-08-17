import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_shared_button_gap_above(button) {
  arguments_assert(arguments, 1);
  ("stand a button off from whatever it is stacked under, by the one gap this app spaces things by");
  ("Every screen that stacks wide buttons down a column puts this gap between them - Next, Skip, Home, the lesson rows on the front screen - so a screen that leaves it out has its buttons touching and reads as a list of one thing rather than as several things to choose between.");
  ("A margin rather than room inside the button, because the gap belongs between two buttons and not to either of them: room inside would make the button itself taller and push its own words off centre.");
  let gap = app_shared_spaced_gap();
  html_style_margin_top(button, gap);
}
